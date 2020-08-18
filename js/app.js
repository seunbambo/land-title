window.onload = function () {
  if (typeof web3 == "undefined") {
    document.getElementById("metamask").innerHTML =
      "You need to install metamask to run this dApp";
  }
};

function getlandinfo() {
  try {
    var abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "country",
            type: "string",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "string",
            name: "landaddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "latitude",
            type: "string",
          },
          {
            internalType: "string",
            name: "longitude",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        inputs: [],
        name: "city",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "country",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "isOwner",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "landaddress",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "latitude",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "longitude",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "previousowner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    var contractaddress = document.getElementById("xconsearch").value;
    myAbi = web3.eth.contract(abi);
    var myFunction = myAbi.at(contractaddress);

    myFunction.country.call(function (err, xcountry) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xcountry) {
        document.getElementById("xcountry").innerHTML = xcountry;
      }
    });

    myFunction.city.call(function (err, xcity) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xcity) {
        document.getElementById("xcity").innerHTML = xcity;
      }
    });
    myFunction.landaddress.call(function (err, xlocation) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xlocation) {
        document.getElementById("xlocation").innerHTML = xlocation;
      }
    });
    myFunction.latitude.call(function (err, xlatitude) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xlatitude) {
        document.getElementById("xlatitude").innerHTML = xlatitude;
      }
    });
    myFunction.longitude.call(function (err, xlongitude) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xlongitude) {
        document.getElementById("xlongitude").innerHTML = xlongitude;
      }
    });
    myFunction.owner.call(function (err, xowner) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xowner) {
        document.getElementById("xowner").innerHTML = xowner;
      }
    });
    myFunction.previousowner.call(function (err, xprevowner) {
      if (err) {
        document.getElementById("metamask").innerHTML = err;
      }
      if (xprevowner) {
        document.getElementById("xprevowner").innerHTML = xprevowner;
      }
    });
  } catch (err) {
    document.getElementById("metamask").innerHTML = err;
  }
}
