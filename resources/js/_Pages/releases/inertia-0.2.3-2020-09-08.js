import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia@v0.2.3',
}

const Page = () => {
  return (
    <>
      <H1>inertia@v0.2.3</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on September 8, 2020</div>
      This release adds the ability to define custom headers on Inertia requests, thanks to the work of [@claudiodekker](https://github.com/claudiodekker) ([#202](https://github.com/inertiajs/inertia/pull/202)).
      Here is how this is done:
      ```js
      this.$inertia.visit('/users', {
        headers: {
          'Custom-Header': 'value',
        },
      })

      this.$inertia.post('/users', this.form, {
        headers: {
          'Custom-Header': 'value',
        },
      })
      ```
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
