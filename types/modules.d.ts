declare module "use-delayed-render" {
  type DelayedRenderOptions = {
    enterDelay?: number;
    exitDelay?: number;
  };

  type DelayedRenderResult = {
    mounted: boolean;
    rendered: boolean;
  };

  export default function useDelayedRender(
    active: boolean,
    options?: DelayedRenderOptions
  ): DelayedRenderResult;
}
