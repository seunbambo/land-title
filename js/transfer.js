window.onload = function () {
  if (typeof web3 == "undefined") {
    document.getElementById("metamask").innerHTML =
      "you need to install metamask to run this dApp";
  }
};

function transferowner() {
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

    var contractaddress = document.getElementById("xconaddress").value;
    window.ethereum.enable();
    //web3.eth.defaultAccount = web3.eth.accounts[0];
    myAbi = web3.eth.contract(abi);
    var myFunction = myAbi.at(contractaddress);

    var newowner = document.getElementById("xnewowner").value;

    myFunction.transferOwnership.sendTransaction(
      newowner,
      { from: web3.eth.accounts[0], gas: 4000000 },
      function (err, result) {
        if (!err) {
          document.getElementById("metamask").innerHTML = result;
        } else {
          document.getElementById("metamask").innerHTML = err;
        }
      }
    );
  } catch (err) {
    document.getElementById("metamask").innerHTML = err;
  }
}
