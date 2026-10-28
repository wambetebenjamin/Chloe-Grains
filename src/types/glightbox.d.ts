declare module "glightbox" {
  interface GLightboxOptions {
    selector?: string | HTMLElement[];
    touchNavigation?: boolean;
    loop?: boolean;
    closeOnOutsideClick?: boolean;
    [key: string]: unknown;
  }

  interface GLightboxInstance {
    open: (options?: unknown) => void;
    close: () => void;
    destroy: () => void;
    [key: string]: unknown;
  }

  export default function GLightbox(options?: GLightboxOptions): GLightboxInstance;
}
