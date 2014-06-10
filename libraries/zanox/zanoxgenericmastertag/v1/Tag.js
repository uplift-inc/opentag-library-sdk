//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("zanox.zanoxgenericmastertag.v1.Tag", {
	config: {
		/*DATA*/
		name: "zanox Generic MasterTag",
		async: true,
		description: "The MasterTag for all pages. Different IDs needed for each page type.",
		html: "<div class=\"zx_${zanoxPageId} zx_mediaslot\">\n	\n</div>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "zanox Page ID",
			description: "Unique ID for the page",
			token: "zanoxPageId",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._zx = window._zx || [];
		window._zx.push({
			"id": "" + this.valueForToken("zanoxPageId")
		});
		window.waitForZanoxDiv = function() {
			if (document.querySelector(".zx_" + this.valueForToken("zanoxPageId") +
				".zx_mediaslot")) {
				(function(d) {
					var s = d.createElement("script");
					s.async = true;
					s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
						"//static.zanox.com/scripts/zanox.js";
					var a = d.getElementsByTagName("script")[0];
					a.parentNode.insertBefore(s, a);
				}(document));
			} else {
				setTimeout(waitForZanoxDiv, 100);
			}
		};
		waitForZanoxDiv();


		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});