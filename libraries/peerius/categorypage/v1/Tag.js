//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("peerius.categorypage.v1.Tag", {
	config: {
		/*DATA*/
		name: "Category Page",
		async: true,
		description: "Peerius tag for the category page (if using universal_variable: universal_variable.page.subcategory should be in - separated format e.g. * - * - * etc)",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "Language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Subcategory Name",
			description: "The name of the subcategory for the current page",
			token: "subcategory",
			uv: "universal_variable.page.subcategory"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.PeeriusCallbacks = {
			track: {
				type: "category",
				lang: "" + this.valueForToken("lang"),
				category: ("" + this.valueForToken("subcategory")).replace(/\s-\s/g, ">")
			}
		};

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});