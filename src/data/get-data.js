class GetData {
  static async getListBlog() {
    const { default: responseJson } = await import('./blogs.json', {
      assert: { type: 'json' },
    });
    return responseJson.blogs;
  }

  static async getListConsultant() {
    const { default: responseJson } = await import('./consultant.json', {
      assert: { type: 'json' },
    });
    return responseJson.consultants;
  }
}

export default GetData;
