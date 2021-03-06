import { syllabify } from "./utils/syllabifier";
import { Syllable } from "./syllable";
import { Cluster } from "./cluster";
import { Char } from "./char";

export class Word {
  original: string;

  constructor(text: string) {
    this.original = text;
  }

  get text(): string {
    return this.syllables.reduce((init, syl) => init + syl.text, "");
  }

  /**
   * @returns a one dimensional array of Syllables
   */
  get syllables(): Syllable[] {
    return syllabify(this.original);
  }

  /**
   * @returns a one dimensional array of Clusters
   */
  get clusters(): Cluster[] {
    return this.syllables.map((syllable) => syllable.clusters).reduce((a, c) => a.concat(c), []);
  }

  /**
   * @returns a one dimensional array of Chars
   */
  get chars(): Char[] {
    return this.clusters.map((cluster) => cluster.chars).reduce((a, c) => a.concat(c), []);
  }
}
