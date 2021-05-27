import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-laravel@v0.3.0',
}

const Page = () => {
  return (
    <>
      <H1>inertia-laravel@v0.3.0</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on October 14, 2020</div>
      <H2>Creating new middleware</H2>
      This release removes the automatic registration of the Inertia middleware. Instead, there is a new command for generating your own `HandleInertiaRequests` middleware:
      ```bash
      php artisan inertia:middleware
      ```
      <H2>Registering new middleware</H2>
      Once you've generated the new middleware, be sure to register the `HandleInertiaRequests` middleware in your `App\Http\Kernel` file as the _last item_ in your `web` middleware group.
      ```diff
      protected $middlewareGroups = [
          'web' => [
              ...
              \Illuminate\Routing\Middleware\SubstituteBindings::class,
      +       \App\Http\Middleware\HandleInertiaRequests::class,
          ],
      ```
      <H2>Using the new middleware</H2>
      This middleware provides a `version()` method for setting your asset version, and a `share()` method for setting the props that are shared by default. This provides a better approach than doing this in your `AppServiceProvider` using the `Inertia::version()` and `Inertia::share()` helpers.
      Here's the complete example of how to use the new `HandleInertiaRequests` middleware:
      ```php
      <?php

      namespace App\Http\Middleware;

      use Illuminate\Http\Request;
      use Inertia\Middleware;

      class HandleInertiaRequests extends Middleware
      {
          /**
           * Determines the current asset version.
           *
           * @see https://inertiajs.com/asset-versioning
           * @param  \Illuminate\Http\Request  $request
           * @return string|null
           */
          public function version(Request $request)
          {
              return parent::version($request);
          }

          /**
           * Defines the props that are shared by default.
           *
           * @see https://inertiajs.com/shared-data
           * @param  \Illuminate\Http\Request  $request
           * @return array
           */
          public function share(Request $request)
          {
              return array_merge(parent::share($request), [
                  'auth' => fn () => [
                      'user' => optional($request->user())->only(['name', 'email']),
                  ],
                  'flash' => fn () => $request->session()->only(['success', 'error']),
              ]);
          }
      }
      ```
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
