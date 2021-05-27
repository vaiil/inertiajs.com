import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-progress@v0.2.1',
}

const Page = () => {
  return (
    <>
      <H1>inertia-progress@v0.2.1</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on October 29, 2020</div>
      - Fixed issue where slow file uploads could cause the progress bar to jump backwards ([commit](https://github.com/inertiajs/progress/commit/b8643ba8733d8b08db31bb3ea358880054337b80)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
