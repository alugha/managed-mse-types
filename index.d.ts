interface ManagedMediaSourceEventMap extends MediaSourceEventMap {
  startstreaming: Event;
  endstreaming: Event;
  // Webkit proposal:
  // https://github.com/w3c/media-source/issues/322
  qualitychange: Event;
}

type PreferredQuality = "low" | "medium" | "high";

interface ManagedMediaSource extends MediaSource {
  readonly sourceBuffers: ManagedSourceBufferList;
  readonly activeSourceBuffers: ManagedSourceBufferList;

  readonly streaming: boolean;
  // Webkit proposal:
  // https://github.com/w3c/media-source/issues/322
  readonly quality?: PreferredQuality;

  addSourceBuffer(type: string): ManagedSourceBuffer;

  addEventListener<K extends keyof ManagedMediaSourceEventMap>(
    type: K,
    listener: (
      this: ManagedMediaSource,
      ev: ManagedMediaSourceEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;

  removeEventListener<K extends keyof ManagedMediaSourceEventMap>(
    type: K,
    listener: (
      this: ManagedMediaSource,
      ev: ManagedMediaSourceEventMap[K],
    ) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare var ManagedMediaSource: {
  prototype: ManagedMediaSource;
  new (): ManagedMediaSource;
  isTypeSupported(type: string): boolean;
};

interface ManagedSourceBufferList extends EventTarget, SourceBufferList {
  readonly length: number;

  addEventListener<K extends keyof SourceBufferListEventMap>(
    type: K,
    listener: (
      this: ManagedSourceBufferList,
      ev: SourceBufferListEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;

  removeEventListener<K extends keyof SourceBufferListEventMap>(
    type: K,
    listener: (
      this: ManagedSourceBufferList,
      ev: SourceBufferListEventMap[K],
    ) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;

  [index: number]: ManagedSourceBuffer;
}

declare var ManagedSourceBufferList: {
  prototype: ManagedSourceBufferList;
};

interface ManagedSourceBufferEventMap extends SourceBufferEventMap {
  bufferedchange: BufferedChangeEvent;
}

interface ManagedSourceBuffer extends SourceBuffer {
  rangesBeforeRemoval?: TimeRanges;

  addEventListener<K extends keyof ManagedSourceBufferEventMap>(
    type: K,
    listener: (
      this: ManagedSourceBuffer,
      ev: ManagedSourceBufferEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;

  removeEventListener<K extends keyof ManagedSourceBufferEventMap>(
    type: K,
    listener: (
      this: ManagedSourceBuffer,
      ev: ManagedSourceBufferEventMap[K],
    ) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare var ManagedSourceBuffer: {
  prototype: ManagedSourceBuffer;
};

interface BufferedChangeEvent extends Event {
  readonly addedRanges: TimeRanges;
  readonly removedRanges: TimeRanges;
}

interface BufferedChangeEventInit extends EventInit {
  addedRanges: TimeRanges;
  removedRanges: TimeRanges;
}

declare var BufferedChangeEvent: {
  prototype: BufferedChangeEvent;
  new (
    type: string,
    eventInitDict: BufferedChangeEventInit,
  ): BufferedChangeEvent;
};
