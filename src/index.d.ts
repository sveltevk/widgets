export interface AuthUser {
  uid: number;
  first_name: string;
  last_name: string;
  photo: string;
  photo_rec: string;
  session: {
    mid: number;
    sid: string;
    secret: string;
    expire: number;
    sig: string;
  };
  hash: string;
}

export class Auth {
  $$prop_def: {
    /**
     * @type {number} [width={350}]
     * @default 200
     */
    width?: number;

    onAuth?: (user: AuthUser) => any;

    /**
     * @type {string} [authUrl="https://dev.vk.com/widgets/auth"]
     */
    authUrl?: string;
  };
}

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

export class Post {
  $$prop_def: {
    /**
     * @type {number} [ownerId={1}]
     */
    ownerId: number;

    /**
     * @type {number} [postId={45616}]
     */
    postId: number;

    /**
     * @type {string} [hash="5GJxomPDPE-WjYJPVoMZjectJImS"]
     */
    hash: string;

    /**
     * @type {number} [width={350}]
     * @default 200
     */
    width?: number;
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

export class Poll {
  $$prop_def: {
    pollId: string;
    width?: number;
    pageUrl?: string;
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

export class Subscribe {
  $$prop_def: {
    ownerId?: number;
    mode?: 0 | 1 | 2;
    soft?: true;
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

export class TextLive {
  $$prop_def: {
    textLiveId: string;
    textPostId?: string;
    hash: string;

    /**
     * @type {number} [width={320}]
     */
    width?: number;
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
