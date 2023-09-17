// AUTOGENERATED FILE
// This file was generated from composition.ohm by `ohm generateBundles`.

import {
  BaseActionDict,
  Grammar,
  IterationNode,
  Node,
  NonterminalNode,
  Semantics,
  TerminalNode
} from 'ohm-js';

export interface BhatkhandeActionDict<T> extends BaseActionDict<T> {
  Composition?: (this: NonterminalNode, arg0: IterationNode) => T;
  multiplySymbol?: (this: NonterminalNode, arg0: TerminalNode) => T;
  matraRow?: (this: NonterminalNode, arg0: IterationNode, arg1: NonterminalNode | TerminalNode) => T;
  matra?: (this: NonterminalNode, arg0: IterationNode, arg1: IterationNode) => T;
  Bol?: (this: NonterminalNode, arg0: NonterminalNode, arg1: IterationNode) => T;
  repeatMatraRow?: (this: NonterminalNode, arg0: IterationNode, arg1: NonterminalNode, arg2: IterationNode, arg3: NonterminalNode, arg4: NonterminalNode | TerminalNode) => T;
  repeatMatras?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: TerminalNode, arg3: NonterminalNode, arg4: NonterminalNode, arg5: IterationNode) => T;
}

export interface BhatkhandeSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: BhatkhandeActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: BhatkhandeActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: BhatkhandeActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: BhatkhandeActionDict<T>): this;
}

export interface BhatkhandeGrammar extends Grammar {
  createSemantics(): BhatkhandeSemantics;
  extendSemantics(superSemantics: BhatkhandeSemantics): BhatkhandeSemantics;
}

declare const grammar: BhatkhandeGrammar;
export default grammar;

