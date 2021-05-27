import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-laravel@v0.2.15',
}

const Page = () => {
  return (
    <>
      <H1>inertia-laravel@v0.2.15</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on October 2, 2020</div>
      Add new `Inertia::location($url)` method for performing full page visits, client-side, using `location.href` ([#154](https://github.com/inertiajs/inertia-laravel/pull/154)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
