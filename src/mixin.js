export default {
  methods: {
    isSuccess(response) {
      return !response.meta.code
    }
  }
}
