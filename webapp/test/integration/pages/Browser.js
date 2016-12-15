sap.ui.define([
		"sap/ui/test/Opa5",
		"ns/test/integration/pages/Common"
	], function(Opa5, Common) {
		"use strict";

		Opa5.createPageObjects({
			onTheBrowserPage : {
				baseClass : Common,

				actions : {

					iChangeTheHashToObjectN : function (iObjIndex) {
						return this.waitFor(this.createAWaitForAnEntitySet({
							entitySet : "Objects",
							success : function (aEntitySet) {
<<<<<<< HEAD
								Opa5.getHashChanger().setHash("/FlightCollection/" + aEntitySet[iObjIndex].carrid);
							}
						}));
					},

					iChangeTheHashToTheRememberedItem : function () {
						return this.waitFor({
							success : function () {
								var sObjectId = this.getContext().currentItem.id;
								Opa5.getHashChanger().setHash("/FlightCollection/" + sObjectId);
							}
						});
					},

					iChangeTheHashToSomethingInvalid : function () {
						return this.waitFor({
							success : function () {
								Opa5.getHashChanger().setHash("/somethingInvalid");
							}
						});
					}

				},

				assertions : {

					iShouldSeeTheHashForObjectN : function (iObjIndex) {
						return this.waitFor(this.createAWaitForAnEntitySet({
							entitySet : "Objects",
							success : function (aEntitySet) {
								var oHashChanger = Opa5.getHashChanger(),
									sHash = oHashChanger.getHash();
								Opa5.assert.strictEqual(sHash, "FlightCollection/" + aEntitySet[iObjIndex].carrid, "The Hash is not correct");
							}
						}));
					},

					iShouldSeeTheHashForTheRememberedObject : function () {
						return this.waitFor({
							success : function () {
								var sObjectId = this.getContext().currentItem.id,
									oHashChanger = Opa5.getHashChanger(),
									sHash = oHashChanger.getHash();
								Opa5.assert.strictEqual(sHash, "FlightCollection/" + sObjectId, "The Hash is not correct");
							}
						});
					},

					iShouldSeeAnEmptyHash : function () {
						return this.waitFor({
							success : function () {
								var oHashChanger = Opa5.getHashChanger(),
									sHash = oHashChanger.getHash();
								Opa5.assert.strictEqual(sHash, "", "The Hash should be empty");
							},
							errorMessage : "The Hash is not Correct!"
						});
					}

				}

			}

		});

	}
);
=======
								Opa5.getHashChanger().setHash("/SEPMRA_C_PO_Employee/" + aEntitySet[iObjIndex].Employee);
							}
						}));
					},

					iChangeTheHashToTheRememberedItem : function () {
						return this.waitFor({
							success : function () {
								var sObjectId = this.getContext().currentItem.id;
								Opa5.getHashChanger().setHash("/SEPMRA_C_PO_Employee/" + sObjectId);
							}
						});
					},

					iChangeTheHashToSomethingInvalid : function () {
						return this.waitFor({
							success : function () {
								Opa5.getHashChanger().setHash("/somethingInvalid");
							}
						});
					}

				},

				assertions : {

					iShouldSeeTheHashForObjectN : function (iObjIndex) {
						return this.waitFor(this.createAWaitForAnEntitySet({
							entitySet : "Objects",
							success : function (aEntitySet) {
								var oHashChanger = Opa5.getHashChanger(),
									sHash = oHashChanger.getHash();
								Opa5.assert.strictEqual(sHash, "SEPMRA_C_PO_Employee/" + aEntitySet[iObjIndex].Employee, "The Hash is not correct");
							}
						}));
					},

					iShouldSeeTheHashForTheRememberedObject : function () {
						return this.waitFor({
							success : function () {
								var sObjectId = this.getContext().currentItem.id,
									oHashChanger = Opa5.getHashChanger(),
									sHash = oHashChanger.getHash();
								Opa5.assert.strictEqual(sHash, "SEPMRA_C_PO_Employee/" + sObjectId, "The Hash is not correct");
							}
						});
					},

					iShouldSeeAnEmptyHash : function () {
						return this.waitFor({
							success : function () {
								var oHashChanger = Opa5.getHashChanger(),
									sHash = oHashChanger.getHash();
								Opa5.assert.strictEqual(sHash, "", "The Hash should be empty");
							},
							errorMessage : "The Hash is not Correct!"
						});
					}

				}

			}

		});

	}
);
>>>>>>> branch 'master' of https://github.com/i048367/factoryTest.git
