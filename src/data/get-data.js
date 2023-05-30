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

  static async getDetailConsultant(id) {
    const { default: responseJson } = await import('./consultant.json', {
      assert: { type: 'json' },
    });
    return responseJson.consultants.find((c) => c.id === id);
  }

  static async searchListConsultant(name) {
    const { default: responseJson } = await import('./consultant.json', {
      assert: { type: 'json' },
    });
    return responseJson.consultants.find((c) => c.name === name);
  }
}

export default GetData;
