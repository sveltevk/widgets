export class Bookmarks {
  $$prop_def: {
    /**
     * @type {string} [url="https://dev.vk.com/widgets/bookmarks"]
     */
    url?: string;

    /**
     * @type {number} [height={30}]
     * @default 24
     */
    height?: 18 | 20 | 22 | 24 | 30;
  };
}

export class ContactUs {
  $$prop_def: {
    /** @type {number} [oid={-20003922}] */
    oid: number;

    /**
     * @type {string} [text="Напишите нам"]
     * @default "Напишите нам"
     */
    text?: string;

    /**
     * @type {number} [height={30}]
     * @default 24
     */
    height?: 18 | 20 | 22 | 24 | 30;
  };
}

interface AppCard {
  /**
   * @type {string} [url="5327745"]
   */
  url: string;

  mode?: 1;
}

interface AppMembers {
  /**
   * @type {string} [url="5327745"]
   */
  url: string;

  mode: 2;
}

interface AppButton {
  /**
   * @type {string} [url="5327745"]
   */
  url: string;

  mode: 3;

  /**
   * @type {number} [height={30}]
   * @default 24
   */
  height?: 18 | 20 | 22 | 24 | 30;
}

type AppProps = AppCard | AppMembers | AppButton;

export class App {
  $$prop_def: AppProps;
}

export class Article {
  $$prop_def: {
    /**
     * @type {string} [url="@tassagency-mayakovskiy"]
     */
    url: string;
  };
}

export class Podcast {
  $$prop_def: {
    /**
     * @type {string} [episode="-147415323_456239337"]
     */
    episode: string;

    /**
     * @type {number} [width={240}]
     * @default 100%
     */
    width?: number;
  };
}
