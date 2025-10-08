<script lang="ts">
  let {
    src,
    alt,
    class: className = '',
    loading = 'lazy',
    width,
    height,
    ...rest
  }: {
    src: string;
    alt: string;
    class?: string;
    loading?: 'lazy' | 'eager';
    width?: number;
    height?: number;
    [key: string]: any;
  } = $props();
</script>

<img
  src={src}
  alt={alt}
  class={className}
  loading={loading}
  width={width}
  height={height}
  decoding="async"
  {...rest}
/>

