/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EventFactory, EventFactoryInterface } from "../EventFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract EventTickets",
        name: "eventTickets",
        type: "address",
      },
    ],
    name: "addEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalTickets",
        type: "uint256",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getEvent",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "contract EventTickets",
            name: "eventTickets",
            type: "address",
          },
        ],
        internalType: "struct EventFactory.EventData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quantity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506128f7806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c806317fc45e214620000575780635555fe1714620000795780636d1884e01462000099578063c7ae745114620000cf575b600080fd5b62000061620000ef565b60405162000070919062000683565b60405180910390f35b62000097600480360381019062000091919062000847565b620000f5565b005b620000b76004803603810190620000b19190620008e1565b62000212565b604051620000c6919062000ad2565b60405180910390f35b620000ed6004803603810190620000e7919062000b3b565b62000391565b005b60005481565b600060016000805481526020019081526020016000209050838160000190805190602001906200012792919062000556565b50338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504281600201819055508383836040516200018590620005e7565b620001939392919062000bbf565b604051809103906000f080158015620001b0573d6000803e3d6000fd5b508160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080815480929190620002079062000c39565b919050555050505050565b6200021c620005f5565b600160008381526020019081526020016000206040518060800160405290816000820180546200024c9062000cb6565b80601f01602080910402602001604051908101604052809291908181526020018280546200027a9062000cb6565b8015620002cb5780601f106200029f57610100808354040283529160200191620002cb565b820191906000526020600020905b815481529060010190602001808311620002ad57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60008060008060008573ffffffffffffffffffffffffffffffffffffffff166305aea97c6040518163ffffffff1660e01b8152600401600060405180830381865afa158015620003e5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019062000410919062000dbe565b9450945094509450945060405180608001604052808681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018773ffffffffffffffffffffffffffffffffffffffff16815250600160008054815260200190815260200160002060008201518160000190805190602001906200049992919062000556565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600080815480929190620005499062000c39565b9190505550505050505050565b828054620005649062000cb6565b90600052602060002090601f016020900481019282620005885760008555620005d4565b82601f10620005a357805160ff1916838001178555620005d4565b82800160010185558215620005d4579182015b82811115620005d3578251825591602001919060010190620005b6565b5b509050620005e3919062000649565b5090565b611a3d8062000e8583390190565b604051806080016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b5b80821115620006645760008160009055506001016200064a565b5090565b6000819050919050565b6200067d8162000668565b82525050565b60006020820190506200069a600083018462000672565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200070982620006be565b810181811067ffffffffffffffff821117156200072b576200072a620006cf565b5b80604052505050565b600062000740620006a0565b90506200074e8282620006fe565b919050565b600067ffffffffffffffff821115620007715762000770620006cf565b5b6200077c82620006be565b9050602081019050919050565b82818337600083830152505050565b6000620007af620007a98462000753565b62000734565b905082815260208101848484011115620007ce57620007cd620006b9565b5b620007db84828562000789565b509392505050565b600082601f830112620007fb57620007fa620006b4565b5b81356200080d84826020860162000798565b91505092915050565b620008218162000668565b81146200082d57600080fd5b50565b600081359050620008418162000816565b92915050565b600080600060608486031215620008635762000862620006aa565b5b600084013567ffffffffffffffff811115620008845762000883620006af565b5b6200089286828701620007e3565b935050602084013567ffffffffffffffff811115620008b657620008b5620006af565b5b620008c486828701620007e3565b9250506040620008d78682870162000830565b9150509250925092565b600060208284031215620008fa57620008f9620006aa565b5b60006200090a8482850162000830565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200094f57808201518184015260208101905062000932565b838111156200095f576000848401525b50505050565b6000620009728262000913565b6200097e81856200091e565b9350620009908185602086016200092f565b6200099b81620006be565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620009d382620009a6565b9050919050565b620009e581620009c6565b82525050565b620009f68162000668565b82525050565b6000819050919050565b600062000a2762000a2162000a1b84620009a6565b620009fc565b620009a6565b9050919050565b600062000a3b8262000a06565b9050919050565b600062000a4f8262000a2e565b9050919050565b62000a618162000a42565b82525050565b6000608083016000830151848203600086015262000a86828262000965565b915050602083015162000a9d6020860182620009da565b50604083015162000ab26040860182620009eb565b50606083015162000ac7606086018262000a56565b508091505092915050565b6000602082019050818103600083015262000aee818462000a67565b905092915050565b600062000b0382620009c6565b9050919050565b62000b158162000af6565b811462000b2157600080fd5b50565b60008135905062000b358162000b0a565b92915050565b60006020828403121562000b545762000b53620006aa565b5b600062000b648482850162000b24565b91505092915050565b600082825260208201905092915050565b600062000b8b8262000913565b62000b97818562000b6d565b935062000ba98185602086016200092f565b62000bb481620006be565b840191505092915050565b6000606082019050818103600083015262000bdb818662000b7e565b9050818103602083015262000bf1818562000b7e565b905062000c02604083018462000672565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000c468262000668565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000c7c5762000c7b62000c0a565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000ccf57607f821691505b6020821081141562000ce65762000ce562000c87565b5b50919050565b600062000d0362000cfd8462000753565b62000734565b90508281526020810184848401111562000d225762000d21620006b9565b5b62000d2f8482856200092f565b509392505050565b600082601f83011262000d4f5762000d4e620006b4565b5b815162000d6184826020860162000cec565b91505092915050565b60008151905062000d7b8162000816565b92915050565b60008115159050919050565b62000d988162000d81565b811462000da457600080fd5b50565b60008151905062000db88162000d8d565b92915050565b600080600080600060a0868803121562000ddd5762000ddc620006aa565b5b600086015167ffffffffffffffff81111562000dfe5762000dfd620006af565b5b62000e0c8882890162000d37565b955050602086015167ffffffffffffffff81111562000e305762000e2f620006af565b5b62000e3e8882890162000d37565b945050604062000e518882890162000d6a565b935050606062000e648882890162000d6a565b925050608062000e778882890162000da7565b915050929550929590935056fe608060405260646001553480156200001657600080fd5b5060405162001a3d38038062001a3d83398181016040528101906200003c919062000568565b6200005c62000050620000d560201b60201c565b620000dd60201b60201c565b6200006d33620001a160201b60201c565b826002600001908051906020019062000088929190620002e0565b508160026001019080519060200190620000a4929190620002e0565b508060028001819055506001600260050160006101000a81548160ff02191690831515021790555050505062000782565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001b1620000d560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001d7620002b760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000230576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002279062000663565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200029a90620006fb565b60405180910390fd5b620002b481620000dd60201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620002ee906200074c565b90600052602060002090601f0160209004810192826200031257600085556200035e565b82601f106200032d57805160ff19168380011785556200035e565b828001600101855582156200035e579182015b828111156200035d57825182559160200191906001019062000340565b5b5090506200036d919062000371565b5090565b5b808211156200038c57600081600090555060010162000372565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003f982620003ae565b810181811067ffffffffffffffff821117156200041b576200041a620003bf565b5b80604052505050565b60006200043062000390565b90506200043e8282620003ee565b919050565b600067ffffffffffffffff821115620004615762000460620003bf565b5b6200046c82620003ae565b9050602081019050919050565b60005b83811015620004995780820151818401526020810190506200047c565b83811115620004a9576000848401525b50505050565b6000620004c6620004c08462000443565b62000424565b905082815260208101848484011115620004e557620004e4620003a9565b5b620004f284828562000479565b509392505050565b600082601f830112620005125762000511620003a4565b5b815162000524848260208601620004af565b91505092915050565b6000819050919050565b62000542816200052d565b81146200054e57600080fd5b50565b600081519050620005628162000537565b92915050565b6000806000606084860312156200058457620005836200039a565b5b600084015167ffffffffffffffff811115620005a557620005a46200039f565b5b620005b386828701620004fa565b935050602084015167ffffffffffffffff811115620005d757620005d66200039f565b5b620005e586828701620004fa565b9250506040620005f88682870162000551565b9150509250925092565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006200064b60208362000602565b9150620006588262000613565b602082019050919050565b600060208201905081810360008301526200067e816200063c565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000620006e360268362000602565b9150620006f08262000685565b604082019050919050565b600060208201905081810360008301526200071681620006d4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200076557607f821691505b602082108114156200077c576200077b6200071d565b5b50919050565b6112ab80620007926000396000f3fe60806040526004361061009c5760003560e01c8063715018a611610064578063715018a6146101575780638da5cb5b1461016e578063d2f0be9914610199578063da2a6589146101c2578063edfb9167146101ed578063f2fde38b1461022a5761009c565b806305aea97c146100a157806319d41c69146100d05780632f366637146100fb578063380d831b146101175780636047b9621461012e575b600080fd5b3480156100ad57600080fd5b506100b6610253565b6040516100c7959493929190610c9b565b60405180910390f35b3480156100dc57600080fd5b506100e56103ac565b6040516100f29190610cfc565b60405180910390f35b61011560048036038101906101109190610d48565b6103b2565b005b34801561012357600080fd5b5061012c6105d1565b005b34801561013a57600080fd5b5061015560048036038101906101509190610d48565b6106ed565b005b34801561016357600080fd5b5061016c610773565b005b34801561017a57600080fd5b506101836107fb565b6040516101909190610db6565b60405180910390f35b3480156101a557600080fd5b506101c060048036038101906101bb9190610d48565b610824565b005b3480156101ce57600080fd5b506101d76109b4565b6040516101e49190610cfc565b60405180910390f35b3480156101f957600080fd5b50610214600480360381019061020f9190610dfd565b6109be565b6040516102219190610cfc565b60405180910390f35b34801561023657600080fd5b50610251600480360381019061024c9190610dfd565b610a0a565b005b6060806000806000600260000160026001016002800154600260030154600260050160009054906101000a900460ff1684805461028f90610e59565b80601f01602080910402602001604051908101604052809291908181526020018280546102bb90610e59565b80156103085780601f106102dd57610100808354040283529160200191610308565b820191906000526020600020905b8154815290600101906020018083116102eb57829003601f168201915b5050505050945083805461031b90610e59565b80601f016020809104026020016040519081016040528092919081815260200182805461034790610e59565b80156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b50505050509350945094509450945094509091929394565b60015481565b60011515600260050160009054906101000a900460ff1615151461040b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040290610ed7565b60405180910390fd5b600154816104199190610f26565b34101561045b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045290610fcc565b60405180910390fd5b60026003015460028001546104709190610fec565b8111156104b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a99061106c565b60405180910390fd5b80600260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610504919061108c565b925050819055508060026003016000828254610520919061108c565b925050819055506000600154826105379190610f26565b905080341115610594573373ffffffffffffffffffffffffffffffffffffffff166108fc82346105679190610fec565b9081150290604051600060405180830381858888f19350505050158015610592573d6000803e3d6000fd5b505b7f72240c1be87ee789414e12fc30844d39a55d1eaf3b8741489fe381ad2b6cdd4733836040516105c59291906110e2565b60405180910390a15050565b6105d9610b02565b73ffffffffffffffffffffffffffffffffffffffff166105f76107fb565b73ffffffffffffffffffffffffffffffffffffffff161461064d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064490611157565b60405180910390fd5b6000600260050160006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156106b1573d6000803e3d6000fd5b507f21e7b2f8578199ba3904a63b7cd799784c8cadde57dde563a7de95ef792e256c33476040516106e39291906110e2565b60405180910390a1565b6106f5610b02565b73ffffffffffffffffffffffffffffffffffffffff166107136107fb565b73ffffffffffffffffffffffffffffffffffffffff1614610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076090611157565b60405180910390fd5b8060018190555050565b61077b610b02565b73ffffffffffffffffffffffffffffffffffffffff166107996107fb565b73ffffffffffffffffffffffffffffffffffffffff16146107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e690611157565b60405180910390fd5b6107f96000610b0a565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b80600260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156108a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a0906111c3565b60405180910390fd5b80600260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108fb9190610fec565b9250508190555080600260030160008282546109179190610fec565b9250508190555060006001548261092e9190610f26565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610976573d6000803e3d6000fd5b507f492e1d962a477f77890c7cfdb563d7ddc58fee6505741794fa5700ada3c1604133836040516109a89291906110e2565b60405180910390a15050565b6000600154905090565b6000600260040160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a12610b02565b73ffffffffffffffffffffffffffffffffffffffff16610a306107fb565b73ffffffffffffffffffffffffffffffffffffffff1614610a86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7d90611157565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610af6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aed90611255565b60405180910390fd5b610aff81610b0a565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c08578082015181840152602081019050610bed565b83811115610c17576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c3982610bce565b610c438185610bd9565b9350610c53818560208601610bea565b610c5c81610c1d565b840191505092915050565b6000819050919050565b610c7a81610c67565b82525050565b60008115159050919050565b610c9581610c80565b82525050565b600060a0820190508181036000830152610cb58188610c2e565b90508181036020830152610cc98187610c2e565b9050610cd86040830186610c71565b610ce56060830185610c71565b610cf26080830184610c8c565b9695505050505050565b6000602082019050610d116000830184610c71565b92915050565b600080fd5b610d2581610c67565b8114610d3057600080fd5b50565b600081359050610d4281610d1c565b92915050565b600060208284031215610d5e57610d5d610d17565b5b6000610d6c84828501610d33565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610da082610d75565b9050919050565b610db081610d95565b82525050565b6000602082019050610dcb6000830184610da7565b92915050565b610dda81610d95565b8114610de557600080fd5b50565b600081359050610df781610dd1565b92915050565b600060208284031215610e1357610e12610d17565b5b6000610e2184828501610de8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e7157607f821691505b60208210811415610e8557610e84610e2a565b5b50919050565b7f4576656e7420616c726561647920636c6f736564000000000000000000000000600082015250565b6000610ec1601483610bd9565b9150610ecc82610e8b565b602082019050919050565b60006020820190508181036000830152610ef081610eb4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f3182610c67565b9150610f3c83610c67565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f7557610f74610ef7565b5b828202905092915050565b7f46756e6473206e6f7420656e6f75676800000000000000000000000000000000600082015250565b6000610fb6601083610bd9565b9150610fc182610f80565b602082019050919050565b60006020820190508181036000830152610fe581610fa9565b9050919050565b6000610ff782610c67565b915061100283610c67565b92508282101561101557611014610ef7565b5b828203905092915050565b7f4f7574206f662073746f636b0000000000000000000000000000000000000000600082015250565b6000611056600c83610bd9565b915061106182611020565b602082019050919050565b6000602082019050818103600083015261108581611049565b9050919050565b600061109782610c67565b91506110a283610c67565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110d7576110d6610ef7565b5b828201905092915050565b60006040820190506110f76000830185610da7565b6111046020830184610c71565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611141602083610bd9565b915061114c8261110b565b602082019050919050565b6000602082019050818103600083015261117081611134565b9050919050565b7f7469636b657473206e6f7420656e6f7567680000000000000000000000000000600082015250565b60006111ad601283610bd9565b91506111b882611177565b602082019050919050565b600060208201905081810360008301526111dc816111a0565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061123f602683610bd9565b915061124a826111e3565b604082019050919050565b6000602082019050818103600083015261126e81611232565b905091905056fea264697066735822122055ad20b751ba0d8523b50072e61be5ea6799255c89469c04a54db01b757150cb64736f6c634300080b0033a2646970667358221220a60327196d394efae050e5f95d533fc0fafb92996f96fd1cfa53528ab94e56e564736f6c634300080b0033";

export class EventFactory__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EventFactory> {
    return super.deploy(overrides || {}) as Promise<EventFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EventFactory {
    return super.attach(address) as EventFactory;
  }
  connect(signer: Signer): EventFactory__factory {
    return super.connect(signer) as EventFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventFactoryInterface {
    return new utils.Interface(_abi) as EventFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventFactory {
    return new Contract(address, _abi, signerOrProvider) as EventFactory;
  }
}
