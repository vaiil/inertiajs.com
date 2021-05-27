import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-vue3@v0.3.4',
}

const Page = () => {
  return (
    <>
      <H1>inertia-vue3@v0.3.4</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on December 29, 2020</div>
      - Update form helper to match reverted `Inertia.delete()` method signature change ([#378](https://github.com/inertiajs/inertia/issues/378)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
