// Astro only ships type declarations for lowercase image extensions.
// Several of the client's photos are .JPG straight off the camera.
declare module '*.JPG' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}
declare module '*.JPEG' {
  const metadata: import('astro').ImageMetadata;
  export default metadata;
}
