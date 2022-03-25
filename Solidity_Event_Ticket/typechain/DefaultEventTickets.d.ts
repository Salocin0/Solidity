/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface DefaultEventTicketsInterface extends ethers.utils.Interface {
  functions: {
    "buyTickets(uint256)": FunctionFragment;
    "endSale()": FunctionFragment;
    "getBuyerTicketCount(address)": FunctionFragment;
    "getRefund(uint256)": FunctionFragment;
    "newTicketPrice(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "readEvent()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "ticketPriceView()": FunctionFragment;
    "ticket_price()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTickets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "endSale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBuyerTicketCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRefund",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "newTicketPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "readEvent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketPriceView",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticket_price",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "buyTickets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBuyerTicketCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRefund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newTicketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readEvent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketPriceView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticket_price",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "LogBuyTickets(address,uint256)": EventFragment;
    "LogEndSale(address,uint256)": EventFragment;
    "LogGetRefund(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogBuyTickets"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogEndSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogGetRefund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type LogBuyTicketsEvent = TypedEvent<
  [string, BigNumber] & { buyer: string; numTickets: BigNumber }
>;

export type LogEndSaleEvent = TypedEvent<
  [string, BigNumber] & { owner: string; balance: BigNumber }
>;

export type LogGetRefundEvent = TypedEvent<
  [string, BigNumber] & { accountRefunded: string; numTickets: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class DefaultEventTickets extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DefaultEventTicketsInterface;

  functions: {
    buyTickets(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBuyerTicketCount(
      buyer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRefund(
      toRefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    newTicketPrice(
      new_ticket_price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    readEvent(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, boolean] & {
        description: string;
        website: string;
        totalTickets: BigNumber;
        sales: BigNumber;
        isOpen: boolean;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ticketPriceView(overrides?: CallOverrides): Promise<[BigNumber]>;

    ticket_price(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  buyTickets(
    quantity: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endSale(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBuyerTicketCount(
    buyer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRefund(
    toRefund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  newTicketPrice(
    new_ticket_price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  readEvent(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, boolean] & {
      description: string;
      website: string;
      totalTickets: BigNumber;
      sales: BigNumber;
      isOpen: boolean;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ticketPriceView(overrides?: CallOverrides): Promise<BigNumber>;

  ticket_price(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTickets(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endSale(overrides?: CallOverrides): Promise<void>;

    getBuyerTicketCount(
      buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRefund(toRefund: BigNumberish, overrides?: CallOverrides): Promise<void>;

    newTicketPrice(
      new_ticket_price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    readEvent(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, boolean] & {
        description: string;
        website: string;
        totalTickets: BigNumber;
        sales: BigNumber;
        isOpen: boolean;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    ticketPriceView(overrides?: CallOverrides): Promise<BigNumber>;

    ticket_price(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogBuyTickets(address,uint256)"(
      buyer?: null,
      numTickets?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { buyer: string; numTickets: BigNumber }
    >;

    LogBuyTickets(
      buyer?: null,
      numTickets?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { buyer: string; numTickets: BigNumber }
    >;

    "LogEndSale(address,uint256)"(
      owner?: null,
      balance?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { owner: string; balance: BigNumber }
    >;

    LogEndSale(
      owner?: null,
      balance?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { owner: string; balance: BigNumber }
    >;

    "LogGetRefund(address,uint256)"(
      accountRefunded?: null,
      numTickets?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { accountRefunded: string; numTickets: BigNumber }
    >;

    LogGetRefund(
      accountRefunded?: null,
      numTickets?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { accountRefunded: string; numTickets: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    buyTickets(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBuyerTicketCount(
      buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRefund(
      toRefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    newTicketPrice(
      new_ticket_price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    readEvent(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticketPriceView(overrides?: CallOverrides): Promise<BigNumber>;

    ticket_price(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTickets(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBuyerTicketCount(
      buyer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRefund(
      toRefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    newTicketPrice(
      new_ticket_price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readEvent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ticketPriceView(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticket_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
