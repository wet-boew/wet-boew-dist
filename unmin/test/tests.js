/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.11-development - 2015-01-28
 *
 *//*! Modernizr (Custom Build) | MIT & BSD */
/*global mocha */

// Test harness to run the full suite
mocha.setup( "bdd" );
wb.doc.on( "wb-ready.wb", function() {

	var runner = mocha.run(),
		failedTests = [];

	runner.on( "end", function() {
		window.mochaResults = runner.stats;
		window.mochaResults.reports = failedTests;
	});

	runner.on( "fail", logFailure);

	function logFailure(test, err) {

		var flattenTitles = function(test) {
			var titles = [];
			while (test.parent.title) {
				titles.push(test.parent.title);
				test = test.parent;
			}
			return titles.reverse();
		};

		failedTests.push({
			name: test.title,
			result: false,
			message: err.message,
			stack: err.message + "\n" + err.stack || "",
			titles: flattenTitles( test )
		});
	}
});

/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Feedback Unit Tests
 * @overview Test the feedback plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Feedback test suite", function() {

	var $document = wb.doc,
		$body = $document.find("body"),
		$elm, $script, $form, $reason, $reasonWeb, $access, $accessComp, $accessMobile, $info, $contact1, $contact2,

		// Tests sections for visibility.  Not using the ":visible" jQuery selector
		// because it is giving inconsistent results in PhantomJS.
		expectVisible = function( $elm ) {
			expect( $elm.hasClass( "hide" ) ).to.equal( false );
			expect( $elm.hasClass( "show" ) ).to.equal( true );
			expect( $elm.attr( "aria-hidden" ) ).to.equal( "false" );
		},
		expectHidden = function( $elm ) {
			expect( $elm.hasClass( "hide" ) ).to.equal( true );
			expect( $elm.hasClass( "show" ) ).to.equal( false );
			expect( $elm.attr( "aria-hidden" ) ).to.equal( "true" );
		};

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function( done ) {
		$elm = $("<div class='feedback'></div>")
			.appendTo( $body );

		$elm.trigger({
			type: "ajax-fetch.wb",
			fetch: {
				url: "../demos/feedback/feedback-en.html"
			}
		});

		$document.on( "ajax-fetched.wb ajax-failed.wb", ".feedback", function( event ) {
			if ( event.type === "ajax-fetched" ) {
				$script = $("<script src='../demos/feedback/demo/feedback.js'></script>")
					.appendTo( $elm );
				$form = event.fetch.pointer.find( ".wb-fdbck" )
					.appendTo( $elm )
					.trigger( "wb-init.wb-fdbck" );
				$reason = $form.find( "#fbrsn" );
				$reasonWeb = $form.find( "#fbweb" );
				$access = $form.find( "#fbaxs" );
				$accessComp = $form.find( "#fbcomp" );
				$accessMobile = $form.find( "#fbmob" );
				$info = $form.find( "#fbinfo" );
				$contact1 = $form.find( "#fbcntc1" );
				$contact2 = $form.find( "#fbcntc2" );
			} else {
				done( event.fetch.error );
			}
		});

		$document.on( "wb-init.wb-fdbck", ".wb-fdbck", function() {
			done();
		});
	});

	after(function() {
		$elm.remove();
	});

	/*
	 * Test the initialization events of the plugin
	 */
	describe( "plugin init", function() {
		it( "should have added the plugin init class to the form", function() {
			expect( $form.hasClass( "wb-fdbck-inited" ) ).to.equal( true );
		});

		it( "should have set aria-controls attributes", function() {
			expect( $reason.attr( "aria-controls" ) ).to.equal( "fbweb" );
			expect( $access.attr( "aria-controls" ) ).to.equal( "fbmob fbcomp" );
		});

		it( "should have set the referrer", function() {
			expect( $( "#fbpg" ).val() ).to.equal( document.referrer );
		});
	});

	/*
	 * Test showHide Web behaviour
	 */
	describe( "showHide Web", function() {

		before(function() {
			$reasonWeb.hide();
		});

		it( "should hide the 'Web' section when reason is not 'web'", function() {
			$reason.val( "" ).trigger( "change" );
			expectHidden( $reasonWeb );
		});

		it( "should show the 'Web' section when reason is 'web'", function() {
			$reason.val( "web" ).trigger( "change" );
			expectVisible( $reasonWeb );
		});
	});

	/*
	 * Test showHide Access behaviour
	 */
	describe( "showHide Access", function() {

		before(function() {
			$accessComp.hide();
			$accessMobile.hide();
		});

		it( "should hide the 'Mobile' section when reason is not 'mobile'", function() {
			$access.val( "desktop" ).trigger( "change" );
			expectVisible( $accessComp );
			expectHidden( $accessMobile );
		});

		it( "should show the 'Mobile' section when reason is 'mobile'", function() {
			$access.val( "mobile" ).trigger( "change" );
			expectVisible( $accessMobile );
		});
	});

	/*
	 * Test showHide Info behaviour
	 */
	describe( "showHide Info", function() {

		before(function() {
			$info.hide();
		});

		it( "should hide the 'Info' section when contacts are not checked", function() {
			$contact1.prop( "checked", false );
			$contact2.prop( "checked", false ).trigger( "change" );
			expectHidden( $info );
		});

		it( "should show the 'Info' section when contact1 is checked", function() {
			$contact1.prop( "checked", true ).trigger( "change" );
			expectVisible( $info );
		});

		it( "should show the 'Info' section when contact2 is checked", function() {
			$contact1.prop( "checked", false ).trigger( "change" );
			$contact2.prop( "checked", true ).trigger( "change" );
			expectVisible( $info );
		});
	});

	/*
	 * Test reset button behaviour
	 */
	describe( "Reset button click", function() {

		before(function() {
			$reason.val( "web" );
			$contact1.prop( "checked", true ).trigger( "change" );
		});

		it( "should hide all sections when reset is clicked", function() {
			expectVisible( $info );
			expectVisible( $reasonWeb );

			$( "input[type='reset']" ).trigger( "click" );

			expectHidden( $info );
			expectHidden( $reasonWeb );
		});
	});
});

}( jQuery, wb ));

/**
 * @title Country Content Plugin Unit Tests
 * @overview Test the country content plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, sinon, before, after */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Country Content test suite", function() {

	/*
	 * Test the initialization and default behaviour of the plugin
	 */
	describe( "init behaviour", function() {
		var $elm,
			stubs = {},
			sandbox = sinon.sandbox.create();

		before(function() {

			// Stub the $.ajax method to return data.country_code = "CA" on success.
			// This must be used instead of Sinon's fakeServer because the plugin uses
			// JSON-P for the request: http://sinonjs.org/docs/#json-p
			stubs.ajax = sandbox.stub( $, "ajax" ).yieldsTo( "success", { country_code: "CA" } );
			stubs.load = sandbox.stub( $.prototype, "load" );

			// Clear out any previously saved country code
			localStorage.removeItem( "countryCode" );

			// Trigger plugin init
			$elm = $( "<div data-ctrycnt='ajax/country-content-{country}-en.html'>" )
				.appendTo( wb.doc.find( "body" ) )
				.trigger( "wb-init.wb-ctrycnt" );
		});

		after(function() {
			// Restore original behaviour of $.ajax
			sandbox.restore();
			$elm.remove();
		});

		it( "should have added the wb-ctrycnt-inited CSS class", function() {
			expect( $elm.hasClass( "wb-ctrycnt-inited" ) ).to.equal( true );
		});

		it( "should have performed a geo IP lookup", function() {
			var i = 0,
				args = stubs.ajax.args,
				len = args.length,
				isLookup = false;

			for ( ; i !== len && !isLookup; i += 1 ) {
				if ( args[ i ] instanceof Array ) {
					isLookup = args[ i ].length && args[ i ][ 0 ].url === "http://freegeoip.net/json/";
				}
			}
			expect( isLookup ).to.equal( true );
		});

		it( "should have loaded the country specific content", function() {
			expect( stubs.load.calledWith( "ajax/country-content-ca-en.html" ) ).to.equal( true );
		});

		it( "should have saved the country code", function() {
			expect( localStorage.getItem( "countryCode" ) ).to.equal( "CA" );
		});
	});

	/*
	 * Test loading specific content
	 */
	describe( "load specific country content from localStorage", function() {
		var $elm;

		before(function( done ) {
			// Load the US content
			localStorage.setItem( "countryCode", "US" );

			// Trigger plugin init
			$elm = $( "<div data-ctrycnt='ajax/country-content-{country}-en.html'>" )
				.appendTo( wb.doc.find( "body" ) )
				.trigger( "wb-init.wb-ctrycnt" );

			// Give the content time to load
			setTimeout( done, 100 );
		});

		after(function() {
			$elm.remove();
		});

		it( "should have saved the country code", function() {
			expect( localStorage.getItem( "countryCode" ) ).to.equal( "US" );
		});
	});
});

}( jQuery, wb ));

/**
 * @title data-ajax Plugin Unit Tests
 * @overview Test the data-ajax plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "data-ajax test suite", function() {
	var spy,
		sandbox = sinon.sandbox.create(),
		$document = wb.doc,
		$body = $document.find( "body" ),
		createElm = function( type, done ) {
			var $elm = $( "<div class='ajax' data-ajax-" + type + "='data-ajax/test/data-ajax.html'>test</div>" );

			callback = done;
			$elm
				.appendTo( $body )
				.trigger( "wb-init.wb-data-ajax" );
			return $elm;
		},
		callback;

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function() {

		// Spy on jQuery's trigger method to see how it's called during the plugin's initialization
		spy = sandbox.spy( $.prototype, "trigger" );

		$document.on( "ajax-fetched.wb ajax-failed.wb", ".ajax", function() {
			if ( typeof callback === "function" ) {
				callback();
			}
		});
	});

	/*
	 * After finishing the test suite, this function is executed once.
	 */
	after(function() {
		// Restore the original behaviour of trigger once the tests are finished
		sandbox.restore();
	});

	/*
	 * Test the initialization events of the plugin
	 */
	describe( "init events", function() {
		var $elm;

		before(function(  ) {
			$elm = createElm( "replace" );
		});

		after(function() {
			$elm.remove();
		});

		it( "should trigger an ajax-fetch.wb event", function() {
			var arg,
				len = spy.args.length,
				isEvent = false;
			while ( len-- && !isEvent ) {
				arg = spy.args[len][0];
				isEvent = typeof arg === "object" && arg.type === "ajax-fetch.wb";
			}
			expect( isEvent ).to.equal( true );
		});
	});

	/*
	 * Test data-ajax-before
	 */
	describe( "data-ajax-before", function() {
		var $elm, $before;

		before(function( done ) {
			$elm = createElm( "before", done );
		});

		after(function() {
			$elm.remove();
			$before.remove();
		});

		it( "should add the .wb-data-ajax-before-inited class", function() {
			expect( $elm.hasClass( "wb-data-ajax-before-inited" ) ).to.equal( true );
		});

		it( "should load an element before itself", function() {
			$before = $elm.prev( ".ajaxed-in" );
			expect( $before.length ).to.be.greaterThan( 0 );
			expect( $before.children().length ).to.be.greaterThan( 0 );
		});
	});

	/*
	 * Test data-ajax-after
	 */
	describe( "data-ajax-after", function() {
		var $elm, $after;

		before(function( done ) {
			$elm = createElm( "after", done );
		});

		after(function() {
			$elm.remove();
			$after.remove();
		});

		it( "should add the .wb-data-ajax-after-inited class", function() {
			expect( $elm.hasClass( "wb-data-ajax-after-inited" ) ).to.equal( true );
		});

		it( "should load an element after itself", function() {
			$after = $elm.next( ".ajaxed-in" );
			expect( $after.length ).to.be.greaterThan( 0 );
			expect( $after.children().length ).to.be.greaterThan( 0 );
		});
	});

	/*
	 * Test data-ajax-replace
	 */
	describe( "data-ajax-replace", function() {
		var $elm;

		before(function( done ) {
			$elm = createElm( "replace", done );
		});

		after(function() {
			$elm.remove();
		});

		it( "should add the .wb-data-ajax-replace-inited class", function() {
			expect( $elm.hasClass( "wb-data-ajax-replace-inited" ) ).to.equal( true );
		});

		it( "should replace its content", function() {
			var $replace = $elm.find( ".ajaxed-in" );
			expect( $elm.children().first()[0] ).to.equal( $replace[ 0 ] );
			expect( $replace.length ).to.be.greaterThan( 0 );
			expect( $replace.children().length ).to.be.greaterThan( 0 );
		});
	});

	/*
	 * Test data-ajax-prepend
	 */
	describe( "data-ajax-prepend", function() {
		var $elm;

		before(function( done ) {
			$elm = createElm( "prepend", done );
		});

		after(function() {
			$elm.remove();
		});

		it( "should add the .wb-data-ajax-prepend-inited class", function() {
			expect( $elm.hasClass( "wb-data-ajax-prepend-inited" ) ).to.equal( true );
		});

		it( "should prepend to its content", function() {
			var $prepend = $elm.find( ".ajaxed-in" );
			expect( $elm.children().first()[0] ).to.equal( $prepend[0] );
			expect( $prepend.length ).to.be.greaterThan( 0 );
			expect( $prepend.children().length ).to.be.greaterThan( 0 );
		});
	});

	/*
	 * Test data-ajax-append
	 */
	describe( "data-ajax-append", function() {
		var $elm;

		before(function( done ) {
			$elm = createElm( "append", done );
		});

		after(function() {
			$elm.remove();
		});

		it( "should add the .wb-data-ajax-append-inited class", function() {
			expect( $elm.hasClass( "wb-data-ajax-append-inited" ) ).to.equal( true );
		});

		it( "should append to its content", function() {
			var $append = $elm.find( ".ajaxed-in" );
			expect( $elm.children().last()[0] ).to.equal( $append[0] );
			expect( $append.length ).to.be.greaterThan( 0 );
			expect( $append.children().length ).to.be.greaterThan( 0 );
		});
	});

	describe( "dynamic data-ajax", function() {
		var $elm;

		before(function( done ) {
			$elm = createElm( "append", done );
		});

		after(function() {
			$elm.remove();
		});

		it( "should use the updated URL", function( done ) {
			callback = done;

			$elm
				.attr( "data-ajax-append", "data-ajax/test/data-ajax2.html" )
				.trigger( "wb-update.wb-data-ajax" );

			callback = function() {
				expect( $elm.find( ".ajaxed-in2" ).length ).to.be.greaterThan( 0 );
				done();
			};
		});
	});
});

}( jQuery, wb ));

/**
 * @title data-inview Plugin Unit Tests
 * @overview Test the data-inview plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, beforeEach, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "data-inview test suite", function() {
	var spy, callback,
		$bar = $( "<section id='bar' class='wb-overlay modal-content overlay-def'>" +
				"<header><h3>Test Bar</h3></header>" +
			"</section>" ),
		$content = $( "<section class='wb-inview' data-inview='bar' style='margin:1200px 0; height: 50px'>" +
				"<h2>Content</h2>" +
			"</section>" ),
		$document = wb.doc,
		$window = wb.win,
		$body  = $document.find( "body" ),
		sandbox = sinon.sandbox.create(),
		componentName = "wb-inview",
		selector = "." + componentName,
		initEvent = "wb-init" + selector;

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function( done ) {
		// Spy on jQuery's trigger method to see how it's called during the plugin's initialization
		spy = sandbox.spy( $.prototype, "trigger" );

		$document.on( initEvent, selector, function( event ) {
			done();
		});

		$document.on( "all.wb-inview partial.wb-inview none.wb-inview", selector, function( event ) {
			if (callback) {
				callback();
			}
		});

		$bar.appendTo( $body );

		$content
			.appendTo( $body )
			.trigger( initEvent );

		$window.scrollTop( 0 );
	});

	/*
	 * After finishing the test suite, this function is executed once.
	 */
	after(function() {
		// Restore the original behaviour of trigger once the tests are finished
		sandbox.restore();
		$bar.remove();
		$content.remove();

		$window.scrollTop( 0 );
	});

	/*
	 * Test the initialization events of the plugin
	 */
	describe( "init events", function() {

		it( "should have been triggered on a .wb-inview element", function() {
			var elm,
				isSelector = false,
				len = spy.thisValues.length;
			while ( !isSelector && len-- ) {
				elm = spy.thisValues[len][0];
				isSelector = elm && elm.className && elm.className.indexOf( "wb-inview" ) > -1;
			}
			expect( isSelector ).to.equal( true );
		});
	});

	/*
	 * Test triggering of the 'scroll.wb-inview' event
	 */
	describe( "scroll.wb-inview event triggering", function() {

		beforeEach(function() {
			spy.reset();
		});

		it( "window 'scroll' event should trigger a scroll.wb-inview event", function() {
			$window.trigger( "scroll" );
			expect( spy.calledWith( "scroll.wb-inview" ) ).to.equal( true );
		});

		it( "window 'scrollstop' event should trigger a scroll.wb-inview event", function() {
			$window.trigger( "scrollstop" );
			expect( spy.calledWith( "scroll.wb-inview" ) ).to.equal( true );
		});

		it( "document 'txt-rsz.wb' event should trigger a scroll.wb-inview event", function() {
			$document.trigger( "txt-rsz.wb" );
			expect( spy.calledWith( "scroll.wb-inview" ) ).to.equal( true );
		});

		it( "document 'win-rsz-width.wb' event should trigger a scroll.wb-inview event", function() {
			$document.trigger( "win-rsz-width.wb" );
			expect( spy.calledWith( "scroll.wb-inview" ) ).to.equal( true );
		});

		it( "document 'win-rsz-height.wb' event should trigger a scroll.wb-inview event", function() {
			$document.trigger( "win-rsz-height.wb" );
			expect( spy.calledWith( "scroll.wb-inview" ) ).to.equal( true );
		});
	});

	describe( "inview bottom", function() {

		before( function() {
			$bar.addClass( "wb-bar-b" );
		});

		after( function() {
			$bar.removeClass( "wb-bar-b" );
		});

		/*
		 * Test that inview bottom works as expected
		 * Testing with PhantomJS is excluded because grunt-mocha doesn't provide a way
		 * to set the viewport height to completely show the $content element.
		 */
		if ( !/PhantomJS/.test( navigator.userAgent ) ) {

			describe( "'all'", function() {

				before( function( done ) {
					callback = done;
					$window.scrollTop( $content.offset().top - 1 );
				});

				it( "should not have an inview bottom bar visible", function() {
					expect( $content.attr( "data-inviewstate" ) ).to.equal( "all" );
					expect( $bar.hasClass( "open" ) ).to.equal( false );
					expect( $bar.is( ":visible" ) ).to.equal( false );
				});
			});
		}

		describe( "'partial'", function() {

			before(function( done ) {
				callback = done;
				$window.scrollTop( $content.offset().top + 50 );
			});

			it( "should have an inview bottom bar visible", function() {
				expect( $content.attr( "data-inviewstate" ) ).to.equal( "partial" );
				expect( $bar.hasClass( "open" ) ).to.equal( true );
				expect( $bar.is( ":visible" ) ).to.equal( true );
			});
		});

		describe( "'none'", function() {

			before(function( done ) {
				callback = done;
				$window.scrollTop( $content.offset().top + 500 );
			});

			it( "should have an inview bottom bar visible", function() {
				expect( $content.attr( "data-inviewstate" ) ).to.equal( "none" );
				expect( $bar.hasClass( "open" ) ).to.equal( true );
				expect( $bar.is( ":visible" ) ).to.equal( true );
			});
		});

	});

	describe( "inview top", function() {

		before( function() {
			$bar.addClass( "wb-bar-t" );
		});

		after( function() {
			$bar.removeClass( "wb-bar-t" );
		});

		/*
		 * Test that inview top works as expected.
		 * Testing with PhantomJS is excluded because grunt-mocha doesn't provide a way
		 * to set the viewport height to completely show the $content element.
		 */
		if ( !/PhantomJS/.test( navigator.userAgent ) ) {

			describe( "'all'", function() {

				before(function( done ) {
					callback = done;
					$window.scrollTop( $content.offset().top - 1 );
				});

				it( "should not have an inview top bar visible", function() {
					expect( $content.attr( "data-inviewstate" ) ).to.equal( "all" );
					expect( $bar.hasClass( "open" ) ).to.equal( false );
					expect( $bar.is( ":visible" ) ).to.equal( false );
				});
			});
		}

		describe( "'partial'", function() {

			before(function( done ) {
				callback = done;
				$window.scrollTop( $content.offset().top + 40 );
			});

			it( "should have an inview top bar visible", function() {
				expect( $content.attr( "data-inviewstate" ) ).to.equal( "partial" );
				expect( $bar.hasClass( "open" ) ).to.equal( true );
				expect( $bar.is( ":visible" ) ).to.equal( true );
			});
		});

		describe( "'none'", function() {

			before(function( done ) {
				callback = done;
				$window.scrollTop( $content.offset().top + 500 );
			});

			it( "should have an inview top bar visible", function() {
				expect( $content.attr( "data-inviewstate" ) ).to.equal( "none" );
				expect( $bar.hasClass( "open" ) ).to.equal( true );
				expect( $bar.is( ":visible" ) ).to.equal( true );
			});
		});
	});

	describe( "inview show-none", function() {
		before(function( done ) {
			callback = done;

			$bar.addClass( "wb-bar-t" );
			$content.addClass("show-none");

			$window.scrollTop( $content.offset().top + 50 );
		});

		after(function() {
			$bar.removeClass( "wb-bar-t" );
			$content.removeClass("show-none");
		});

		it( "should not have an inview top bar visible (.show-none CSS class prevents it)", function() {
			expect( $content.attr( "data-inviewstate" ) ).to.equal( "partial" );
			expect( $bar.hasClass( "open" ) ).to.equal( false );
			expect( $bar.is( ":visible" ) ).to.equal( false );
		});
	});
});

}( jQuery, wb ));

/**
 * @title data-picture Plugin Unit Tests
 * @overview Test the data-picture plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "[data-pic] test suite", function() {
	var sandbox = sinon.sandbox.create(),
		selector = "[data-pic]",
		$document = wb.doc,
		$body = $document.find( "body" ),
		$elm, spy;

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function( done ) {
		// Spy on jQuery's trigger method to see how it's called during the plugin's initialization
		spy = sandbox.spy( $.prototype, "trigger" );

		$document.on( "wb-init.wb-pic", selector, function() {
			done();
		});

		$elm = $(
			"<span data-pic data-alt='foo' data-class='foo' class='test'>" +
			"<span data-src='baz.jpg' data-media='screen'></span>" +
			"<span data-src='bar.jpg' data-media='print'></span>" +
			"</span>" );

		$elm.appendTo( $body );

		$( selector ).trigger( "wb-init.wb-pic" );
	});

	/*
	 * After finishing the test suite, this function is executed once.
	 */
	after(function() {
		// Restore the original behaviour of trigger once the tests are finished
		sandbox.restore();

		// Remove test data from the page
		$elm.remove();
	});

	/*
	 * Test the initialization events of the plugin
	 */
	describe( "init events", function() {

		it( "should have a picfill.wb-pic event", function() {
			expect( spy.calledWith( "picfill.wb-pic" ) ).to.equal( true );
		});

		it( "should have been triggered on a [data-pic] element", function() {
			var len = spy.thisValues.length,
				isSelector = false;
			while ( !isSelector && len-- ) {
				isSelector = spy.thisValues[len].selector === "[data-pic]";
			}
			expect( isSelector ).to.equal( true );
		});
	});

	/*
	 * Test that onresize, the plugin reacts correctly
	 */
	describe( "resize events", function() {

		it( "should have txt-rsz.wb event handler", function() {
			$document.trigger( "txt-rsz.wb" );
			expect( spy.calledWith( "picfill.wb-pic" ) ).to.equal( true );
		});

		it( "should have win-rsz-width.wb event handler", function() {
			$document.trigger( "win-rsz-width.wb" );
			expect( spy.calledWith( "picfill.wb-pic" ) ).to.equal( true );
		});

		it( "should have win-rsz-height.wb event handler", function() {
			$document.trigger( "win-rsz-height.wb" );
			expect( spy.calledWith( "picfill.wb-pic" ) ).to.equal( true );
		});
	});

	/*
	 * Test that the plugin creates responsive images as expected
	 */
	describe( "responsive images", function() {
		var $img;

		before(function() {
			$img = $elm.find( "img" );
		});

		it( "should have created one responsive image that matches one of the span[data-src] elements", function() {
			var $span;

			$span = $elm.find( "[data-src='" + $img.attr("src") + "']" );
			expect( $img ).to.have.length( 1 );
			expect( $span.length ).to.be.greaterThan( 0 );
		});

		it( "should create a responsive image with src for the matching media query", function() {
			expect( $img ).to.have.length( 1 );
			expect( $img.attr( "src" ) ).to.equal( "baz.jpg" );
		});

		it( "should have set the responsive image alt attribute", function() {
			expect( $img.attr( "alt" ) ).to.equal( $elm.data( "alt" ) );
		});

		it( "should have set the responsive image's class attribute", function() {
			expect( $img.attr( "class" ) ).to.equal( $elm.data( "class" ) );
		});
	});

	describe( "responsive images with no matching media query", function() {
		var $img;

		before(function() {
			$img = $(
					"<span data-pic data-alt='foo' class='test'>" +
					"<span data-src='bar.jpg' data-media='print'></span>" +
					"</span>" )
				.appendTo( $body )
				.trigger( "picfill.wb-pic" );
		});

		after(function() {
			$img.remove();
		});

		it( "should not create a responsive image when no matching media query", function() {
			expect( $img.find( "img" ) ).to.have.length( 0 );
		});
	});

	describe( "responsive images with no source", function() {
		var $img;

		before(function() {
			$img = $("<span data-pic data-alt='foo' class='test'>" )
				.appendTo( $body )
				.trigger( "picfill.wb-pic" );
		});

		after(function() {
			$img.remove();
		});

		it( "should not create a responsive image when no span[data-src]", function() {
			expect( $img.find( "img" ) ).to.have.length( 0 );
		});
	});

});

}( jQuery, wb ));

/**
 * @title Equal Heights Plugin Unit Tests
 * @overview Test the equal heights plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, beforeEach, after */
/* jshint unused:vars */
(function( $, wb, undef ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "equalheights test suite", function() {
	var $row, height, minHeight, callback, test,
		$document = wb.doc,
		$body = $document.find( "body" ),

		/*
		 * Used in $.each() to test the height of child elements in a given .wb-eqht element
		 */
		testHeight = function( idx ) {
			var $elm = $( this ),

				// Re-initialize the variables every 2 elements. This works because the test
				// data only ever has 2 elements on a given baseline.
				isInit = idx % 2 === 0,

				// Is this a case where only one element exists on a baseline?
				isSingleElm = isInit && $elm.is( ":last-child" );

			height = isInit ? $elm.height() : height;
			minHeight = isInit ? parseInt( $elm.css( "min-height" ), 10 ) : minHeight;

			// When only a single element on a baseline, its min-height should be set to 0
			if ( isSingleElm ) {
				expect( minHeight ).to.equal( 0 );
			} else {
				expect( minHeight ).to.be.greaterThan( 0 );
			}
			expect( parseInt( $elm.css( "min-height" ), 10 ) ).to.equal( minHeight );
			expect( $elm.height() ).to.equal( height );
		},

		defaultTest = function( $rows, done ) {
			$row.each( testHeight );
		},

		addFixture = function( $elm, done ) {
			callback = done;

			$row = $elm
				.appendTo( $body )
				.trigger( "wb-init.wb-eqht" )
				.children();
		},

		removeFixture = function() {
			$row.parent().remove();
			$row = undef;
		};

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function() {
		$document.on( "wb-updated.wb-eqht", function( event ) {
			var currentTest = test || defaultTest;
			if ( $row !== undef ) {
				currentTest();
				callback();
			}
		});

		$document.on( "wb-ready.wb-eqht", function() {
			callback();
		});
	});

	// Before each test, reset the height and min-height values of the elements
	beforeEach(function() {
		$row.css( "min-height", "" );
		height = -1;
		minHeight = -1;
	});

	/*
	 * Test resizing with all children on same baseline
	 */
	describe( "resize float on same baseline", function() {

		before(function( done ) {
			addFixture( $( "<div class='wb-eqht test'>" +
				"<div style='width:49%; float:left;'>foo</div>" +
				"<div style='width:49%; float:left;'>bar</div>" +
			"</div>" ), done );
		});

		after(function() {
			removeFixture();
		});

		it( "should resize on txt-rsz.wb event", function( done ) {
			callback = done;

			$document.trigger( "txt-rsz.wb" );
		});

		it( "should resize on win-rsz-width.wb event", function( done ) {
			callback = done;

			$document.trigger( "win-rsz-width.wb" );
		});

		it( "should resize on win-rsz-height.wb event", function( done ) {
			callback = done;

			$document.trigger( "win-rsz-height.wb" );
		});

		it( "should resize on wb-updated.wb-tables event", function( done ) {
			callback = done;

			$document.trigger( "wb-updated.wb-tables" );
		});
	});

	/*
	 * Test resizing with children dropping to next baseline
	 */
	describe( "resize multiple floated baselines", function() {

		before(function( done ) {
			addFixture( $( "<div class='wb-eqht test'>" +
				"<div style='width:49%; float:left'>all</div>" +
				"<div style='width:49%; float:left'>yours</div>" +
				"<div style='width:49%; float:left'>bases</div>" +
				"<div style='width:49%; float:left; height: 100px;'>are belong to us</div>" +
			"</div>" ), done );
		});

		after(function() {
			removeFixture();
		});

		it( "should resize on txt-rsz.wb event", function( done ) {
			callback = done;

			$document.trigger( "txt-rsz.wb" );
		});

		it( "should resize on win-rsz-width.wb event", function( done ) {
			callback = done;

			$document.trigger( "win-rsz-width.wb" );
		});

		it( "should resize on win-rsz-height.wb event", function( done ) {
			callback = done;

			$document.trigger( "win-rsz-height.wb" );
		});

		it( "should resize on wb-updated.wb-tables event", function( done ) {
			callback = done;

			$document.trigger( "wb-updated.wb-tables" );
		});
	});

	/*
	 * Test resizing with children dropping to next baseline
	 */
	describe( "resize multiple inline-block baselines", function() {

		before(function( done ) {
			addFixture( $( "<div class='wb-eqht test'>" +
					"<div style='width:49%; display: inline-block; height: 25px'></div>" +
					"<div style='width:49%; display: inline-block; height: 50px'></div>" +
					"<div style='width:49%; display: inline-block; height: 75px'></div>" +
				"</div>" ), done );
		});

		after(function() {
			removeFixture();
		});

		it( "should resize on txt-rsz.wb event", function( done ) {
			callback = done;

			$document.trigger( "txt-rsz.wb" );
		});

		it( "should resize on win-rsz-width.wb event", function( done ) {
			callback = done;

			$document.trigger( "win-rsz-width.wb" );
		});

		it( "should resize on win-rsz-height.wb event", function( done ) {
			callback = done;

			$document.trigger( "win-rsz-height.wb" );
		});

		it( "should resize on wb-updated.wb-tables event", function( done ) {
			callback = done;

			$document.trigger( "wb-updated.wb-tables" );
		});
	});

	describe( "resize nested elements", function() {

		before(function( done ) {
			addFixture( $( "<div class='wb-eqht test'>" +
				"<div style='width:49%; float:left; height: 50px'><div class='hght-inhrt'>foo</div></div>" +
				"<div style='width:49%; float:left;'><div>bar</div></div>" +
			"</div>" ), done );

			test = function() {
				var $nestedBlocks = $row.find( ".hght-inhrt" ),
					$nestedNonEqBlocks = $row.find(":not(.hght-inhrt)"),
					nestedLength = $nestedBlocks.length,
					nestedNonEqLength = $nestedNonEqBlocks.length,
					$nested, n;

				expect( nestedLength ).to.be.greaterThan( 0 );
				expect( nestedNonEqLength ).to.be.greaterThan( 0 );

				for ( n = 0; n < nestedLength; n += 1 ) {
					$nested = $nestedBlocks.eq( n );
					expect( $nested.height() ).to.be.equal( $nested.parent().height() );
				}

				for ( n = 0; n < nestedNonEqLength; n += 1 ) {
					$nested = $nestedNonEqBlocks.eq( n );
					expect( $nested.height() ).to.be.lessThan( $nested.parent().height() );
				}
			};
		});

		after(function() {
			removeFixture();

			test = null;
		});

		it( "should resize nested elements with the 'hght-inhrt' class", function( done ) {
			callback = done;

			$document.trigger( "txt-rsz.wb" );
		});

	});
});

}( jQuery, wb ));

/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Favion Plugin Unit Tests
 * @overview Test the favicon plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Favicon test suite", function() {

	var $favicon, $faviconMobile, spy,
		sandbox = sinon.sandbox.create();

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function() {
		// Spy on jQuery's trigger methods
		spy = sandbox.spy( $.prototype, "trigger" );

		$favicon = $( "<link href='test/path/favicon.ico' rel='icon' type='image/x-icon'>" )
			.appendTo( wb.doc.find( "head" ) )
			.trigger( "wb-init.wb-favicon" );
	});

	/*
	 * After finishing the test suite, this function is executed once.
	 */
	after(function() {
		// Restore the original behaviour of trigger once the tests are finished
		sandbox.restore();

		// Remove the test elements
		$favicon.remove();
		$faviconMobile.remove();
	});

	/*
	 * Test the initialization events of the plugin
	 */
	describe( "init events", function() {
		it( "should trigger mobile.wb-favicon event", function() {
			expect( spy.calledWith( "mobile.wb-favicon" ) ).to.equal( true );
		});
	});

	/*
	 * Test that a mobile favicon was added with the correct attributes
	 */
	describe( "create default mobile favicon", function() {

		var href, path;
		before(function() {
			$faviconMobile = $( ".wb-favicon" );
			href = $favicon.attr( "href" );
			path = href.substring( 0, href.lastIndexOf( "/" ) + 1 );
		});

		it( "should have created a mobile favicon", function() {
			expect( $faviconMobile ).to.have.length( 1 );
		});

		it( "should have set a default 'rel' attribute", function() {
			expect( $faviconMobile.attr( "rel" ) ).to.equal( "apple-touch-icon" );
		});

		it( "should have set a default 'sizes' attribute", function() {
			expect( $faviconMobile.attr( "sizes" ) ).to.equal( "57x57 72x72 114x114 144x144 150x150" );
		});

		it( "should have set a default 'href' attribute", function() {
			expect( $faviconMobile.attr( "href" ) ).to.equal( path + "favicon-mobile.png" );
		});
	});

	/*
	 * Test that a mobile favicon can be created with custom data
	 */
	describe( "create custom mobile favicon", function() {

		before(function( done ) {
			$favicon.removeClass( "wb-favicon-inited" );
			$faviconMobile.remove();

			$favicon.data({
				rel: "apple-touch-icon-precomposed",
				sizes: "57x57",
				path: "foo/",
				filename: "bar"
			}).trigger( "wb-init.wb-favicon" );

			setTimeout(function() {
				$faviconMobile = $( ".wb-favicon" );
				done();
			}, 1 );

		});

		it( "should have created a mobile favicon", function() {
			expect( $faviconMobile ).to.have.length( 1 );
		});

		it( "should have set a custom 'rel' attribute", function() {
			expect( $faviconMobile.attr( "rel" ) ).to.equal( "apple-touch-icon-precomposed" );
		});

		it( "should have set a custom 'sizes' attribute", function() {
			expect( $faviconMobile.attr( "sizes" ) ).to.equal( "57x57" );
		});

		it( "should have set a custom 'href' attribute", function() {
			expect( $faviconMobile.attr( "href" ) ).to.equal( "foo/bar" );
		});
	});

	/*
	 * Test update of favicon
	 */
	describe( "update favicon", function() {

		before(function() {
			$faviconMobile.remove();
			$favicon.trigger( "icon.wb-favicon", {
				path: "foobar/",
				filename: "baz"
			});
		});

		it( "should not have created a mobile favicon", function() {
			expect( $( ".wb-favicon" ) ).to.have.length( 0 );
		});

		it( "should have set a custom 'href' attribute", function() {
			expect( $favicon.attr( "href" ) ).to.equal( "foobar/baz" );
		});
	});
});

}( jQuery, wb ));

/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Feeds Unit Tests
 * @overview Test the web feeds plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Feeds test suite", function() {
	var sandbox = sinon.sandbox.create(),
		ajaxEvent = "ajax-fetch.wb",
		fetchedEvent = "ajax-fetched.wb",
		$document = wb.doc,
		ajaxCalls, callback;

	before(function() {

		//Replaces the ajax-fetch event handler with a simulated one
		$document.off( ajaxEvent );

		$document.on( ajaxEvent, function( event ) {
			ajaxCalls.push( event.fetch );
			$( event.target ).trigger({
				type: fetchedEvent,
				fetch: {
					response: {
						responseData: {
							feed: {
								entries: [
									{
										title: "Test entry 1",
										link: "http://foo.com",
										publishedDate: "Mon, 27 Jan 2014 21:00:00 -0500"
									},
									{
										title: "Test entry 2",
										link: "http://bar.com",
										publishedDate: "Wed, 29 Jan 2014 21:00:00 -0500"
									},
									{
										title: "Test entry 3",
										link: "http://baz.com",
										publishedDate: "Fri, 31 Jan 2014 21:00:00 -0500"
									}
								]
							}
						}
					}
				}
			}, event.fetch.context );
		} );

		$document.on( "wb-feed-ready.wb-feeds", ".wb-feeds .feeds-cont", function() {
			callback();
		});
	});

	after(function() {
		sandbox.restore();
	});

	/*
	 * Test the initialization of the plugin
	 */
	describe( "plugin init", function() {
		var $elm;

		before( function( done ) {
			ajaxCalls = [];
			callback = done;

			// Create the feed element
			$elm = $( "<div class='wb-feeds'><ul class='feeds-cont'>" +
				"<li><a href='http://foobar.com/'></a></li>" +
				"</ul></div>" )
				.appendTo( $document.find( "body" ) )
				.trigger( "wb-init.wb-feeds" );

		});

		after(function() {
			$elm.remove();
		});

		it( "should have added the plugin init class to the element", function() {
			expect( $elm.hasClass( "wb-feeds-inited" ) ).to.equal( true );
		});

		it( "should have made an ajax call to load the feed entries", function() {
			var i = 0,
				len = ajaxCalls.length,
				isLookup = false,
				feedurl = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" +
					encodeURIComponent( decodeURIComponent( "http://foobar.com/" ) );

			for ( ; i !== len && !isLookup; i += 1 ) {
				isLookup = ajaxCalls.length && ajaxCalls[ i ].url === feedurl;
			}
			expect( isLookup ).to.equal( true );
		});

		it( "should have populated .feeds-cont with 3 feed links", function() {
			expect( $elm.find( ".feeds-cont > li" ).length ).to.equal( 3 );
		});
	});

	/*
	 * Test limiting feed entries
	 */
	describe( "feed entries limit", function() {
		var $elm;

		before( function( done ) {
			ajaxCalls = [];
			callback = done;

			// Create the feed element
			$elm = $( "<div class='wb-feeds limit-2'><ul class='feeds-cont'>" +
				"<li><a href='http://foobar.com/'></a></li>" +
				"</ul></div>" )
				.appendTo( $document.find( "body" ) )
				.trigger( "wb-init.wb-feeds" );
		});

		after(function() {
			$elm.remove();
		});

		it( "should have limited to 2 feed entries", function() {
			expect( $elm.find( ".feeds-cont > li" ).length ).to.equal( 2 );
		});
	});

	/*
	 * Test loading multiple feeds
	 */
	describe( "multiple feed links", function() {
		var $elm;

		before (function( done ) {
			ajaxCalls = [];
			callback = done;

			// Create the feed element
			$elm = $( "<div class='wb-feeds'><ul class='feeds-cont'>" +
				"<li><a href='http://foobar.com/'></a></li>" +
				"<li><a href='http://bazbam.com/'></a></li>" +
				"</ul></div>" )
				.appendTo( $document.find( "body" ) )
				.trigger( "wb-init.wb-feeds" );
		});

		after(function() {
			$elm.remove();
		});

		it( "should have made two ajax calls to load the feed entries", function() {
			var i = 0,
				len = ajaxCalls.length,
				isLookup1 = false,
				isLookup2 = false,
				feedurl1 = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" +
					encodeURIComponent( decodeURIComponent( "http://foobar.com/" ) ),
				feedurl2 = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" +
					encodeURIComponent( decodeURIComponent( "http://bazbam.com/" ) );

			for ( ; i !== len; i += 1 ) {
				isLookup1 = isLookup1 || ( ajaxCalls.length && ajaxCalls[ i ].url === feedurl1 );
				isLookup2 = isLookup2 || ( ajaxCalls.length && ajaxCalls[ i ].url === feedurl2 );
			}
			expect( isLookup1 ).to.equal( true );
			expect( isLookup2 ).to.equal( true );
		});

		it( "should have populated .feeds-cont with 6 feed links", function() {
			expect( $elm.find( ".feeds-cont > li" ).length ).to.equal( 6 );
		});
	});
});

}( jQuery, wb ));

/**
 * @title Prettify Plugin Unit Tests
 * @overview Test the Prettify plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Prettify test suite", function() {
	var spy, callback, $prettify,
		$document = wb.doc,
		$body = $document.find( "body" ),
		sandbox = sinon.sandbox.create();

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function(done) {
		// Spy on jQuery's trigger method to see how it's called during the plugin's initialization
		spy = sandbox.spy( $.prototype, "trigger" );

		// Start the tests once the plugin has been finished processing
		$document.on( "wb-ready.wb-prettify", function() {
			callback();
		});

		callback = done;

		// Add the test elements
		$prettify = $( "<span class='wb-prettify lang-css'></span>" )
			.appendTo( $body )
			.trigger( "wb-init.wb-prettify" );

		$body.append( "<pre class='test prettyprint'></pre>" );
		$body.append( "<pre class='test noprettify'></pre>" );
	});

	/*
	 * After finishing the test suite, this function is executed once.
	 */
	after(function() {
		// Restore the original behaviour of trigger once the tests are finished
		sandbox.restore();

		// Remove test elements from the page
		$prettify.remove();
		$( "pre.test" ).remove();
	});

	/*
	 * Test the initialization events of the plugin
	 */
	describe( "init events", function() {

		it( "should have marked the element as initialized", function() {
			expect( $prettify.hasClass( "wb-prettify-inited" ) ).to.equal( true );
		});

		it( "should have created a window.prettyPrint function", function() {
			expect( typeof window.prettyPrint ).to.equal( "function" );
		});

		it( "should have added a .prettyprinted CSS class to pre.prettyprint elements", function() {
			$( "pre.prettyprint" ).each(function() {
				expect( this.className.indexOf( "prettyprinted" ) ).to.be.greaterThan( -1 );
			});
		});

		it( "should not have added a .prettyprinted CSS class to pre elements without a .prettyprint class", function() {
			$( "pre.noprettify" ).each(function() {
				expect( this.className.indexOf( "prettyprinted" ) ).to.equal( -1 );
			});
		});
	});

	/*
	 * Test default plugin settings
	 */
	describe( "dependency loading", function() {

		it( "should have loaded prettify.js file", function() {
			expect( $("script[src*='deps/prettify']") ).to.have.length( 1 );
		});

		it( "should have loaded lang-css.js syntax file", function() {
			expect( $("script[src*='/lang-css']") ).to.have.length( 1 );
		});

		it( "should not have loaded lang-sql.js syntax file", function() {
			expect( $("script[src*='/lang-sql']") ).to.have.length( 0 );
		});
	});

	/*
	 * Test plugin settings
	 */
	describe( "override plugin settings with CSS classes", function() {

		before(function( done ) {

			//Prettify needs more time in IE to complete, due to the pre from mocha results
			this.timeout(5000);

			callback = done;

			$body.append( "<pre class='test'></pre>" );
			$prettify
				.removeClass( "wb-prettify-inited" )
				.addClass( "lang-sql" )
				.addClass( "all-pre" )
				.addClass( "linenums" )
				.trigger( "wb-init.wb-prettify" );
		});

		it( "should have loaded lang-sql.js syntax file", function() {
			expect( $("script[src*='/lang-sql']") ).to.have.length( 1 );
		});

		it( "should have added a .prettyprinted CSS class to all pre elements", function() {
			expect( $( "pre.test.prettyprinted" ).length ).to.be( $( "pre.test" ).length );
		});

		it( "should have added a .linenums CSS class to all pre elements", function() {
			expect( $( "pre.test.linenums" ).length ).to.be( $( "pre.test" ).length );
		});
	});

	/*
	 * Test plugin settings
	 */
	describe( "override plugin settings with data attributes", function() {

		before(function( done ) {

			//Prettify needs more time in IE to complete, due to the pre from mocha results
			this.timeout(5000);

			callback = done;

			$body.append( "<pre class='test'></pre>" );
			$prettify
				.removeClass( "wb-prettify-inited" )
				.removeClass( "all-pre linenums")
				.data({
					allpre: true,
					linenums: true
				})
				.trigger( "wb-init.wb-prettify" );
		});

		it( "should have added a .prettyprinted CSS class to all pre elements", function() {
			expect( $( "pre.test.prettyprinted" ).length ).to.be( $( "pre.test" ).length );
		});

		it( "should have added a .linenums CSS class to all pre elements", function() {
			expect( $( "pre.test.linenums" ).length ).to.be( $( "pre.test" ).length );
		});
	});
});

}( jQuery, wb ));

/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Session Timeout Plugin Unit Tests
 * @overview Test the session timeout plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Session Timeout test suite", function() {

	var clock, server, $session,
		spies = {},
		sandbox = sinon.sandbox.create(),
		$document = wb.doc,
		callback;

	this.timeout(5000);

	/*
	 * Before beginning the test suite, this function is executed once.
	 */
	before(function( done ) {

		// Spy on jQuery's trigger and post methods
		spies.trigger = sandbox.spy( $.prototype, "trigger" );
		spies.post = sandbox.spy( $, "post" );

		callback = done;

		$document.on( "inactivity.wb-sessto", function() {
			$( ".wb-sessto-confirm.btn-primary" ).trigger( "click" );
		});

		$document.on( "wb-ready.wb-sessto", ".wb-sessto", function() {
			if ( callback ) {
				callback();
			}
		});

		$session = $( "<span class='wb-sessto'></span>" )
			.data( "wet-boew", {
				inactivity: 10000,
				sessionalive: 10000,
				refreshLimit: 42000,
				refreshOnClick: true
			})
			.appendTo( $document.find( "body" ))
			.trigger( "wb-init.wb-sessto" );
	});

	/*
	 * After finishing the test suite, this function is executed once.
	 */
	after(function() {
		// Cleanup the test element
		$session.remove();
		$( "#wb-sessto-modal" ).remove();

		// Restore the original behaviour of spies, server and timer
		sandbox.restore();
	});

	/*
	 * Test initialization of the plugin
	 */
	describe( "init plugin", function() {
		it( "should trigger reset.wb-sessto event", function() {
			expect( spies.trigger.calledWith( "reset.wb-sessto" ) ).to.equal( true );
		});

		it( "should have marked the element as initialized", function() {
			expect( $session.hasClass( "wb-sessto-inited" ) ).to.equal( true );
		});
	});

	describe( "inactivity", function() {

		before(function( done ) {

			// Allow time for magnificPopup dependency to load
			setTimeout( function() {

				// Use a fake timer (allows for easy testing of setTimeout calls)
				clock = sandbox.useFakeTimers();

				// Reset the plugin timeouts and the trigger spy (prevents false positives from previous tests)
				$session.trigger( "reset.wb-sessto", $session.data( "wet-boew" ) );
				spies.trigger.reset();

				done();
			}, 500 );
		});

		it( "should trigger inactivity.wb-sessto after 10000ms", function() {
			clock.tick( 10010 );
			expect( spies.trigger.calledWith( "inactivity.wb-sessto" ) ).to.equal( true );
		});

		it( "should trigger keepalive.wb-sessto event after 10000ms", function() {
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( true );
		});

		it( "should trigger reset.wb-sessto event after 10000ms", function() {
			expect( spies.trigger.calledWith( "reset.wb-sessto" ) ).to.equal( true );
		});

		it( "should not have triggered inactivity events 19950ms", function() {
			spies.trigger.reset();
			clock.tick( 9940 );
			expect( spies.trigger.calledWith( "inactivity.wb-sessto" ) ).to.equal( false );
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( false );
			expect( spies.trigger.calledWith( "reset.wb-sessto" ) ).to.equal( false );
		});

		it( "should have triggered inactivity events after 20000ms", function() {
			spies.trigger.reset();
			clock.tick( 100 );
			expect( spies.trigger.calledWith( "inactivity.wb-sessto" ) ).to.equal( true );
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( true );
			expect( spies.trigger.calledWith( "reset.wb-sessto" ) ).to.equal( true );
		});

		it( "has no refreshCallbackUrl so should not call $.post", function() {
			expect( spies.post.called ).to.equal( false );
		});

	});

	describe( "refresh onclick", function() {

		before(function() {
			// Reset the state of the spies
			spies.trigger.reset();
			spies.post.reset();
		});

		it( "should trigger keepalive.wb-sessto on document click", function() {
			clock.tick( 42010 );
			$document.trigger( "click" );
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( true );
		});

		it( "should trigger reset.wb-sessto on document click", function() {
			expect( spies.trigger.calledWith( "reset.wb-sessto" ) ).to.equal( true );
		});

		it( "has no refreshCallbackUrl so should not call $.post", function() {
			expect( spies.post.called ).to.equal( false );
		});

		it( "should not trigger keepalive.wb-sessto on document click (refresh limit prevents)", function() {
			spies.trigger.reset();

			$document.trigger( "click" );
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( false );
		});

		it( "should trigger keepalive.wb-sessto on document click (refresh limit allows)", function() {
			spies.trigger.reset();
			clock.tick( 42010 );

			$document.trigger( "click" );
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( true );
		});
	});

	describe( "refreshCallbackUrl", function() {

		before(function( done ) {
			// Setup the fake server response for all POST requests to foo.html
			server = sandbox.useFakeServer();
			server.respondWith( "POST", "foo.html", "true" );

			callback = done;

			// Add the session timeout element and trigger it's init'
			$session.data( "wet-boew", {
					sessionalive: 5000,
					refreshCallbackUrl: "foo.html"
				})
				.removeClass( "wb-sessto-inited" )
				.trigger( "wb-init.wb-sessto" );
		});

		it( "should trigger keepalive.wb-sessto after 5000ms", function() {
			spies.trigger.reset();
			spies.post.reset();

			clock.tick( 5010 );
			expect( spies.trigger.calledWith( "keepalive.wb-sessto" ) ).to.equal( true );
		});

		it( "has refreshCallbackUrl so should call $.post", function() {
			expect( spies.post.called ).to.equal( true );
			expect( spies.post.calledWith( "foo.html" ) ).to.equal( true );
		});

		it( "successful response triggers reset.wb-sessto event", function() {
			server.respond();
			expect( spies.trigger.calledWith( "reset.wb-sessto" ) ).to.equal( true );
		});
	});

});

}( jQuery, wb ));

/*
 * @title Toggle Plugin Unit Tests
 * @overview Test the Toggle plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, beforeEach, after, afterEach, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Text highlighting test suite", function() {
	var sandbox = sinon.sandbox.create(),
		$document = wb.doc,
		$body = $document.find( "body" ),
		componentName = "wb-txthl",
		selector = "." + componentName,
		initEvent = "wb-init" + selector,
		defaultInitEventObj = {
			type: initEvent
		},
		initEventObj, callback, $elm;

	/*
	 * Before begining the test suite, this function is exectued once.
	 */
	before( function() {
		$document.on( "wb-ready" + selector, selector, function() {
			if ( callback ) {
				callback();
			}
		});
	});

	/*
	 * After finishing the test suite, this function is exectued once.
	 */
	after( function() {
		sandbox.restore();
	});

	beforeEach( function( done ) {
		callback = done;

		$elm = $( "<div class='wb-txthl'><p>This is a test. It's just some testing.</p></div>" )
			.appendTo( $body )
			.trigger( initEventObj );
	});

	afterEach( function() {
		$elm.remove();
	});

	/*
	 * Test initialization of the plugin
	 */
	describe( "init plugin", function() {
		before( function() {
			initEventObj = defaultInitEventObj;
		});

		it( "should have marked the element as initialized", function() {
			expect( $elm.hasClass( "wb-txthl-inited" ) ).to.equal( true );
		});
	});

	( wb.pageUrlParts.params.txthl ? describe : describe.skip )( "search query from the querystring", function() {
		var $matches;

		before( function() {
			initEventObj = defaultInitEventObj;
		});

		it( "should have highlighted words matching the query", function() {
			var matchesLength;

			$matches = $elm.find( ".txthl > mark" );
			matchesLength = $matches.length;

			expect( matchesLength ).to.equal( 3 );

			expect( $matches.eq( 0 ).text() ).to.equal( "test" );
			expect( $matches.eq( 1 ).text() ).to.equal( "just some" );
			expect( $matches.eq( 2 ).text() ).to.equal( "test" );
		});
	});

	describe( "dynamic search query", function() {
		var $matches;

		describe( "simple query", function() {
			before( function() {
				initEventObj = defaultInitEventObj;
				initEventObj.txthl = "test";
			});

			it( "should have highlighted words matching the query", function() {
				var matchesLength, m;

				$matches = $elm.find( ".txthl > mark" );
				matchesLength = $matches.length;

				expect( matchesLength ).to.equal( 2 );

				for ( m = 0; m < matchesLength; m += 1 ) {
					expect( $matches.eq( m ).text() ).to.equal( "test" );
				}
			});
		});

		describe( "complex query as a string", function() {
			before( function() {
				initEventObj = defaultInitEventObj;
				initEventObj.txthl = "just some|test";
			});

			it( "should have highlighted words matching the query", function() {
				var matchesLength;

				$matches = $elm.find( ".txthl > mark" );
				matchesLength = $matches.length;

				expect( matchesLength ).to.equal( 3 );

				expect( $matches.eq( 0 ).text() ).to.equal( "test" );
				expect( $matches.eq( 1 ).text() ).to.equal( "just some" );
				expect( $matches.eq( 2 ).text() ).to.equal( "test" );
			});
		});

		describe( "complex query as an array", function() {
			before( function() {
				initEventObj = defaultInitEventObj;
				initEventObj.txthl = [
					"just some",
					"test"
				];
			});

			it( "should have highlighted words matching the query", function() {
				var matchesLength;

				$matches = $elm.find( ".txthl > mark" );
				matchesLength = $matches.length;

				expect( matchesLength ).to.equal( 3 );

				expect( $matches.eq( 0 ).text() ).to.equal( "test" );
				expect( $matches.eq( 1 ).text() ).to.equal( "just some" );
				expect( $matches.eq( 2 ).text() ).to.equal( "test" );
			});
		});
	});
});

}( jQuery, wb ));

/*
 * @title Toggle Plugin Unit Tests
 * @overview Test the Toggle plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @patheard
 */
/* global jQuery, describe, it, expect, before, after, sinon */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
 */
describe( "Toggle test suite", function() {
	var spy,
		sandbox = sinon.sandbox.create(),
		$body = wb.doc.find( "body" );

	/*
	 * Before begining the test suite, this function is exectued once.
	 */
	before(function() {
		// Spy on jQuery's trigger method to see how it's called during the plugin's initialization
		spy = sandbox.spy( $.prototype, "trigger" );
	});

	/*
	 * After finishing the test suite, this function is exectued once.
	 */
	after(function() {
		// Restore the original behaviour of trigger once the tests are finished
		sandbox.restore();
	});

	/*
	 * Test initialization of the plugin
	 */
	describe( "initialization", function() {
		var $test, $toggleSelf, $toggleOthers, $accordion, $toggleTabs;

		before(function() {
			// Create test element
			$test = $( "<div class='toggle-test'>" )
				.appendTo( $body );

			// Create toggle elements and trigger plugin init
			$toggleSelf = $( "<div class='wb-toggle'>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );

			$toggleOthers = $( "<div class='wb-toggle' data-toggle='{\"selector\": \".toggle-test\"}'>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );

			$accordion = $( "<div class='toggle-test-accordion'>" +
					"<details class='toggle-test-acc'>" +
						"<summary class='wb-toggle tgl-tab' data-toggle='{\"parent\": \".toggle-test-accordion\", \"group\": \".toggle-test-acc\"}'></summary>" +
						"<div class='tgl-panel'></div>" +
					"</details>" +
					"<details class='toggle-test-acc'>" +
						"<summary class='wb-toggle tgl-tab' data-toggle='{\"parent\": \".toggle-test-accordion\", \"group\": \".toggle-test-acc\"}'></summary>" +
						"<div class='tgl-panel'></div>" +
					"</details>" +
				"</div>")
				.appendTo( $body );
			$toggleTabs = $accordion.find( ".wb-toggle" )
				.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$test.remove();
			$toggleSelf.remove();
			$toggleOthers.remove();
			$accordion.remove();
		});

		it( "should have been marked toggle elements as initialized", function() {
			expect( $toggleSelf.hasClass( "wb-toggle-inited" ) ).to.equal( true );
			expect( $toggleOthers.hasClass( "wb-toggle-inited" ) ).to.equal( true );
			$toggleTabs.each( function() {
				expect( $( this ).hasClass( "wb-toggle-inited" ) ).to.equal( true );
			});
		});

		it( "should have merged default settings with toggle element's data", function() {
			var data = $toggleSelf.data( "toggle" );
			expect( data.stateOn ).to.equal( "on" );
			expect( data.stateOff ).to.equal( "off" );
		});

		it( "$toggleSelf should have aria-controls attribute set to own ID", function() {
			expect( $toggleSelf.attr( "aria-controls" ) ).to.equal( $toggleSelf.attr( "id" ) );
		});

		it( "$toggleOthers should have aria-controls attribute set to controlled elements", function() {
			var ariaControls = "",
				selector = $toggleOthers.data( "toggle" ).selector;

				$( selector ).each( function() {
					ariaControls += this.id + " ";
				});
				expect( $toggleOthers.attr( "aria-controls" ) ).to.equal( $.trim( ariaControls ) );
		});

		it( "should have aria tablist attributes if a tablist", function() {
			var data, $panel, $parent;

			$toggleTabs.each( function() {
				data = $( this ).data( "toggle" );
				$parent = $( data.parent );
				expect( $parent.attr( "role" ) ).to.equal( "tablist" );

				$parent.find( ".tgl-tab" ).each( function() {
					expect( this.getAttribute( "role" ) ).to.equal( "tab" );
				});
				$parent.find( ".tgl-panel" ).each( function() {
					expect( this.getAttribute( "role" ) ).to.equal( "tabpanel" );
				});
				$parent.find( data.group ).each( function() {
					$panel = $( this );
					expect( $panel.find( ".tgl-panel" ).attr( "aria-labelledby" )  ).to.equal( $panel.find( ".tgl-tab" ).attr( "id" ) );
				});
			});
		});
	});

	/*
	 * Test plugin click event
	 */
	describe( "click event", function() {
		var $toggle;

		before(function() {
			spy.reset();

			// Create toggle element and trigger plugin init
			$toggle = $( "<div class='wb-toggle'>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" )
				.trigger( "click" );
		});

		after(function() {
			$toggle.remove();
		});

		it( "should trigger toggle.wb-toggle", function() {
			expect( spy.calledWith( "toggle.wb-toggle" ) ).to.equal( true );
		});

		it( "should trigger toggled.wb-toggle", function() {
			expect( spy.calledWith( "toggled.wb-toggle" ) ).to.equal( true );
		});

		it( "should trigger focus.wb", function() {
			expect( spy.calledWith( "setfocus.wb" ) ).to.equal( true );
		});
	});

	/*
	 * Test specific toggle element
	 */
	describe( "toggle on/off states of selector", function() {
		var $toggler, $toggledElm;

		before(function() {
			// Create the toggle element and start testing once it has been initialized
			$toggledElm = $( "<div id='foo' class='test'/>" ).appendTo( $body );
			$toggler = $( "<button type='button' class='wb-toggle test' data-toggle='{\"selector\": \"#foo\"}'/>" ).appendTo( $body );
			$toggler.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$toggler.remove();
			$toggledElm.remove();
		});

		it( "should have been toggled on", function() {
			$toggler.trigger( "click" );
			expect( $toggledElm.hasClass( "on" ) ).to.equal( true );
			expect( $toggledElm.data( "wb-toggle-state" ) ).to.equal( "on" );
		});

		it( "should have been toggled off", function() {
			$toggler.trigger( "click" );
			expect( $toggledElm.hasClass( "off" ) ).to.equal( true );
			expect( $toggledElm.data( "wb-toggle-state" ) ).to.equal( "off" );
		});
	});

	/*
	 * Test toggle of self
	 */
	describe( "toggle on/off states of self", function() {
		var $toggler;

		before(function() {
			// Create the toggle element and start testing once it has been initialized
			$toggler = $( "<button type='button' class='wb-toggle test'/>" ).appendTo( $body );
			$toggler.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$toggler.remove();
		});

		it( "should have been toggled on", function() {
			$toggler.trigger( "click" );
			expect( $toggler.hasClass( "on" ) ).to.equal( true );
			expect( $toggler.data( "wb-toggle-state" ) ).to.equal( "on" );
		});

		it( "should have been toggled off", function() {
			$toggler.trigger( "click" );
			expect( $toggler.hasClass( "off" ) ).to.equal( true );
			expect( $toggler.data( "wb-toggle-state" ) ).to.equal( "off" );
		});
	});

	/*
	 * Test toggle type with custom on/off state CSS classes
	 */
	describe( "toggle type togglers with custom states", function() {
		var $togglerOn, $togglerOff;

		before(function() {
			// Create the toggle elements and start testing once it has been initialized
			$togglerOn = $( "<button type='button' class='wb-toggle test' data-toggle='{\"type\": \"on\", \"stateOn\": \"open\"}'/>" ).appendTo( $body );
			$togglerOn.trigger( "wb-init.wb-toggle" );

			$togglerOff = $( "<button type='button' class='wb-toggle test' data-toggle='{\"type\": \"off\", \"stateOff\": \"close\"}'/>" ).appendTo( $body );
			$togglerOff.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$togglerOn.remove();
			$togglerOff.remove();
		});

		it( "should have been toggled on", function() {
			$togglerOn.trigger( "click" );
			expect( $togglerOn.hasClass( "open" ) ).to.equal( true );
			expect( $togglerOn.data( "wb-toggle-state" ) ).to.equal( "open" );
		});

		it( "should remain toggled on", function() {
			$togglerOn.trigger( "click" );
			expect( $togglerOn.hasClass( "open" ) ).to.equal( true );
			expect( $togglerOn.data( "wb-toggle-state" ) ).to.equal( "open" );
		});

		it( "should have been toggled off", function() {
			$togglerOff.trigger( "click" );
			expect( $togglerOff.hasClass( "close" ) ).to.equal( true );
			expect( $togglerOff.data( "wb-toggle-state" ) ).to.equal( "close" );
		});

		it( "should remain toggled off", function() {
			$togglerOff.trigger( "click" );
			expect( $togglerOff.hasClass( "close" ) ).to.equal( true );
			expect( $togglerOff.data( "wb-toggle-state" ) ).to.equal( "close" );
		});
	});

	/*
	 * Grouped toggles
	 */
	describe( "Group toggle elements", function() {
		var $toggle1, $toggle2, $toggle3, $toggler1, $toggler2, $toggler3;

		before(function() {
			// Create the toggle elements and start testing once it has been initialized
			$toggler1 = $( "<button type='button' class='wb-toggle' data-toggle='{\"selector\": \"#test-toggle1\", \"group\": \".grouped\", \"type\": \"on\"}'/>" ).appendTo( $body );
			$toggler2 = $( "<button type='button' class='wb-toggle' data-toggle='{\"selector\": \"#test-toggle2\", \"group\": \".grouped\", \"type\": \"on\"}'/>" ).appendTo( $body );
			$toggler3 = $( "<button type='button' class='wb-toggle' data-toggle='{\"selector\": \"#test-toggle3\", \"group\": \".grouped\", \"type\": \"on\"}'/>" ).appendTo( $body );

			$toggle1 = $( "<div id='test-toggle1' class='grouped'>" ).appendTo( $body );
			$toggle2 = $( "<div id='test-toggle2' class='grouped'>" ).appendTo( $body );
			$toggle3 = $( "<div id='test-toggle3' class='grouped'>" ).appendTo( $body );

			$toggler1.trigger( "wb-init.wb-toggle" );
			$toggler2.trigger( "wb-init.wb-toggle" );
			$toggler3.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$toggler1.remove();
			$toggler2.remove();
			$toggler3.remove();

			$toggle1.remove();
			$toggle2.remove();
			$toggle3.remove();
		});

		it( "should open the first example only", function() {
			$toggler1.trigger( "click" );
			expect( $toggle1.hasClass( "on" ) ).to.equal( true );
			expect( $toggle2.hasClass( "on" ) ).to.equal( false );
			expect( $toggle3.hasClass( "on" ) ).to.equal( false );
		});

		it( "should open the second example only", function() {
			$toggler2.trigger( "click" );
			expect( $toggle1.hasClass( "on" ) ).to.equal( false );
			expect( $toggle2.hasClass( "on" ) ).to.equal( true );
			expect( $toggle3.hasClass( "on" ) ).to.equal( false );
		});

		it( "should open the third example only", function() {
			$toggler3.trigger( "click" );
			expect( $toggle1.hasClass( "on" ) ).to.equal( false );
			expect( $toggle2.hasClass( "on" ) ).to.equal( false );
			expect( $toggle3.hasClass( "on" ) ).to.equal( true );
		});
	});

	/*
	 * Details elements
	 */
	describe( "Toggle details elements", function() {
		var $details, $toggler;

		before(function() {
			spy.reset();

			// Create the toggle elements and start testing once it has been initialized
			$toggler = $( "<button type='button' class='wb-toggle test' data-toggle='{\"selector\": \".test-details\"}'/>" ).appendTo( $body );
			$details = $( "<details class=\"test test-details\"><summary></summary></details>" ).appendTo( $body );
			$toggler.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$toggler.remove();
			$details.remove();
		});

		it( "should open details element", function() {
			$toggler.trigger( "click" );
			expect( $details.hasClass( "on" ) ).to.equal( true );

			// Test must account for browser with and without details element native support
			if ( Modernizr.details ) {
				expect( $details.prop( "open" ) ).to.equal( true );
			} else {
				expect( $details.attr( "open" ) ).to.equal( "open" );
				expect( spy.calledWith( "toggle.wb-details" ) ).to.equal( true );
			}
		});

		it( "should close details element", function() {
			$toggler.trigger( "click" );
			expect( $details.hasClass( "off" ) ).to.equal( true );

			// Test must account for browser with and without details element native support
			if ( Modernizr.details ) {
				expect( $details.prop( "open" ) ).to.equal( false );
			} else {
				expect( $details.attr( "open" ) ).to.equal( undefined );
				expect( spy.calledWith( "toggle.wb-details" ) ).to.equal( true );
			}
		});
	});

	/*
	 * Accordion
	 */
	describe( "Accordion", function() {
		var $accordion, $details, $panels, $tabs,
			testAccordionClosed = function( idx ) {
				expect( $details.eq( idx ).hasClass( "on" ) ).to.equal( false );
				expect( $tabs.eq( idx ).attr( "aria-selected" ) ).to.equal( "false" );
				expect( $panels.eq( idx ).attr( "aria-expanded" ) ).to.equal( "false" );
				expect( $panels.eq( idx ).attr( "aria-hidden" ) ).to.equal( "true" );
			},
			testAccordionOpen = function( idx ) {
				expect( $details.eq( idx ).hasClass( "on" ) ).to.equal( true );
				expect( $tabs.eq( idx ).attr( "aria-selected" ) ).to.equal( "true" );
				expect( $panels.eq( idx ).attr( "aria-expanded" ) ).to.equal( "true" );
				expect( $panels.eq( idx ).attr( "aria-hidden" ) ).to.equal( "false" );
			};

		before(function() {
			$accordion = $( "<div class='test-accordion'>" +
					"<details class='test-acc'>" +
						"<summary class='wb-toggle tgl-tab' data-toggle='{\"parent\": \".test-accordion\", \"group\": \".test-acc\"}'></summary>" +
						"<div class='tgl-panel'></div>" +
					"</details>" +
					"<details class='test-acc'>" +
						"<summary class='wb-toggle tgl-tab' data-toggle='{\"parent\": \".test-accordion\", \"group\": \".test-acc\"}'></summary>" +
						"<div class='tgl-panel'></div>" +
					"</details>" +
				"</div>")
				.appendTo( $body );

			$details = $accordion.find( "details" );
			$panels = $accordion.find( ".tgl-panel" );
			$tabs = $accordion.find( ".tgl-tab" )
				.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$accordion.remove();
		});

		it( "should open the first accordion panel", function() {
			$tabs.eq( 0 ).trigger( "click" );
			testAccordionOpen( 0 );
			testAccordionClosed( 1 );
		});

		it( "should open the second accordion panel", function() {
			$tabs.eq( 1 ).trigger( "click" );
			testAccordionOpen( 1 );
			testAccordionClosed( 0 );
		});

		it( "should close the second accordion panel", function() {
			$tabs.eq( 1 ).trigger( "click" );
			testAccordionClosed( 0 );
			testAccordionClosed( 1 );
		});
	});

	/*
	 * Test onbeforeprint behaviour
	 */
	describe( "Printing toggle elements", function() {
		var $detailsOn, $detailsOff;

		before(function() {
			spy.reset();

			$detailsOn = $( "<details class=\"wb-toggle\" data-toggle='{\"print\": \"on\"}'><summary></summary></details>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );
			$detailsOff = $( "<details class=\"wb-toggle\" data-toggle='{\"print\": \"off\"}'><summary></summary></details>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );

			wb.win.trigger( "beforeprint" );
		});

		after(function() {
			$detailsOn.remove();
			$detailsOff.remove();
		});

		it( "should trigger toggle.wb-toggle", function() {
			expect( spy.calledWith( "toggle.wb-toggle" ) ).to.equal( true );
		});

		it( "should toggle on the $detailsOn element", function() {
			expect( $detailsOn.hasClass( "on" ) ).to.equal( true );
		});

		it( "should toggle off the $detailsOff element", function() {
			expect( $detailsOff.hasClass( "off" ) ).to.equal( true );
		});
	});

	/*
	 * Test persistence behaviour
	 */
	describe( "Persist toggle state: no saved state", function() {
		var $detailsLocal, $detailsSession,
			keyLocal = "wb-toggletest-local",
			keySession = "wb-toggletest-session";

		before(function() {
			spy.reset();
			localStorage.removeItem( keyLocal );
			sessionStorage.removeItem( keySession );

			$detailsLocal = $( "<details class=\"wb-toggle\" id=\"test-local\" data-toggle='{\"persist\": \"local\"}'><summary></summary></details>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );

			$detailsSession = $( "<details class=\"wb-toggle\" id=\"test-session\" data-toggle='{\"persist\": \"session\"}'><summary></summary></details>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$detailsLocal.remove();
			$detailsSession.remove();
		});

		it( "should not trigger toggle.wb-toggle when initialized", function() {
			expect( spy.calledWith( "toggle.wb-toggle" ) ).to.equal( false );
			expect( localStorage.getItem( keyLocal ) ).to.equal( null );
			expect( sessionStorage.getItem( keySession ) ).to.equal( null );
		});

		it( "should save the toggle 'on' state in localStorage", function() {
			$detailsLocal.trigger( "click" );
			expect( localStorage.getItem( keyLocal ) ).to.equal( "on" );
		});

		it( "should save the toggle 'off' state in localStorage", function() {
			$detailsLocal.trigger( "click" );
			expect( localStorage.getItem( keyLocal ) ).to.equal( "off" );
		});

		it( "should save the toggle 'on' state in sessionStorage", function() {
			$detailsSession.trigger( "click" );
			expect( sessionStorage.getItem( keySession ) ).to.equal( "on" );
		});

		it( "should save the toggle 'off' state in sessionStorage", function() {
			$detailsSession.trigger( "click" );
			expect( sessionStorage.getItem( keySession ) ).to.equal( "off" );
		});
	});

	describe( "Persist toggle state: saved state", function() {
		var $details,
			key = "wb-toggletest-session";

		before(function() {
			spy.reset();
			sessionStorage.setItem( key, "on" );

			$details = $( "<details class=\"wb-toggle\" id=\"test-session\" data-toggle='{\"persist\": \"session\"}'><summary></summary></details>" )
				.appendTo( $body )
				.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$details.remove();
		});

		it( "should trigger toggle.wb-toggle when initialized", function() {
			expect( spy.calledWith( "toggle.wb-toggle" ) ).to.equal( true );
			expect( sessionStorage.getItem( key ) ).to.equal( "on" );
		});

		it( "should save the toggle 'off' state in sessionStorage", function() {
			$details.trigger( "click" );
			expect( sessionStorage.getItem( key ) ).to.equal( "off" );
		});
	});

	describe( "Persist toggle state: group toggle", function() {
		var $details1, $details2,
			key1 = "wb-toggle.test-grouptest-1",
			key2 = "wb-toggle.test-grouptest-2";

		before(function() {
			spy.reset();
			sessionStorage.removeItem( key1 );
			sessionStorage.removeItem( key2 );

			$details1 = $( "<details class=\"wb-toggle test-group\" id=\"test-1\" data-toggle='{\"persist\": \"session\", \"group\": \".test-group\"}'><summary></summary></details>" )
				.appendTo( $body );
			$details2 = $( "<details class=\"wb-toggle test-group\" id=\"test-2\" data-toggle='{\"persist\": \"session\", \"group\": \".test-group\"}'><summary></summary></details>" )
				.appendTo( $body );

			$details1.trigger( "wb-init.wb-toggle" );
			$details2.trigger( "wb-init.wb-toggle" );
		});

		after(function() {
			$details1.remove();
			$details2.remove();
		});

		it( "should save the 'on' state for $details1 and clear the state for $details2", function() {
			$details1.trigger( "click" );
			expect( sessionStorage.getItem( key1 ) ).to.equal( "on" );
			expect( sessionStorage.getItem( key2 ) ).to.equal( null );
		});

		it( "should save the 'off' state for $details1 and clear the state for $details2", function() {
			$details1.trigger( "click" );
			expect( sessionStorage.getItem( key1 ) ).to.equal( "off" );
			expect( sessionStorage.getItem( key2 ) ).to.equal( null );
		});

		it( "should clear the state for $details1 and save the 'on' state for $details2", function() {
			$details2.trigger( "click" );
			expect( sessionStorage.getItem( key1 ) ).to.equal( null );
			expect( sessionStorage.getItem( key2 ) ).to.equal( "on" );
		});
	});
});

}( jQuery, wb ));

/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @title Twitter Plugin Unit Tests
 * @overview Test the favicon plugin behaviour
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/* global jQuery, describe, it, expect, before, after */
/* jshint unused:vars */
(function( $, wb ) {

/*
 * Create a suite of related test cases using `describe`. Test suites can also be
 * nested in other test suites if you want to use the same setup `before()` and
 * teardown `after()` for more than one test suite (as is the case below.)
*/

describe( "Twitter test suite", function() {

  /*
   * Test the initialization and default behaviour of the plugin
   */
  var $elm,
    $document = wb.doc,
    $body = $document.find( "body" );

  before(function( done ) {

    // The Twitter widget sometimes takes longer than two second to load
    this.timeout(5000);

    // Trigger plugin init
    $elm = $( "<div class='wb-twitter'><a class='twitter-timeline' href='https://twitter.com/search?q=%23WxT' data-widget-id='329066756620566528'>Tweets about '#WxT'</a></div>" )
      .appendTo( $body )
      .trigger( "wb-init.wb-twitter" );

    $document.on( "wb-ready.wb-twitter", ".wb-twitter", function() {
      done();
    });
  });

  after(function() {
    $elm.remove();
  });

  /*
   * Test the initialization events of the plugin
   */
  describe( "init event", function() {
    it( "should have added the wb-twitter-inited CSS class", function() {
      expect( $elm.hasClass( "wb-twitter-inited" ) ).to.equal( true );
    });
  });

});

}( jQuery, wb ));
