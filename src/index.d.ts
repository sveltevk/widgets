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

export class Like {
  $$prop_def: {
    type?: 'full' | 'button' | 'mini' | 'vertical';
    width?: number;

    /**
     * @type {number} [height={30}]
     * @default 22
     */
    height?: 18 | 20 | 22 | 24 | 30;

    verb?: true;
    pageTitle?: string;
    pageUrl?: string;
    pageImage?: string;
    pageId?: string;
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

export class AllowMessagesFromCommunity {
  $$prop_def: {
    /** @type {number} [groupId={2158488}] */
    groupId: number;

    /**
     * @type {number} [height={30}]
     * @default 24
     */
    height?: 22 | 24 | 30;
  };
}

export class CommunityMessages {
  $$prop_def: {
    /**
     * @type {number} [group={127607773}]
     */
    group: number;

    onCanNotWrite?: (
      reason: 'offline' | 'no_access' | 'disabled_messages' | 'cant_write',
    ) => any;
    welcomeScreen?: boolean;
    expandTimeout?: number;
    expanded?: true;
    widgetPosition?: 'left' | 'right';
    buttonType?: 'no_button' | 'blue_circle';
    disableButtonTooltip?: true;
    tooltipButtonText?: string;
    disableNewMessagesSound?: true;
    disableExpandChatSound?: true;
    disableTitleChange?: true;
  };
  destroy(id: string): void;
  expand(options: { welcomeScreen?: true }): void;
  stopTitleAnimation(): void;
  minimize(): void;
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
