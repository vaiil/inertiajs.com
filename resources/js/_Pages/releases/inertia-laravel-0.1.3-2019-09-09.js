import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-laravel@v0.1.3',
}

const Page = () => {
  return (
    <>
      <H1>inertia-laravel@v0.1.3</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on September 9, 2019</div>
      - Added `Arrayable` support for props ([#39](https://github.com/inertiajs/inertia-laravel/pull/39)).
      - Replaced `array_only` with `Arr::only` ([#68](https://github.com/inertiajs/inertia-laravel/pull/68)).
      - Fixed wildcard URLs used with route macro ([#69](https://github.com/inertiajs/inertia-laravel/pull/69)).
      - Updated to always return a response object ([#44](https://github.com/inertiajs/inertia-laravel/pull/44)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
