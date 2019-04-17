export default class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(apiResult => {
        console.log(apiResult.data);
      })
      .catch(err => console.log(err));
  }

  createOneRegister(newChar) {
    const { name, occupation, cartoon, weapon } = newChar;
    // ES6 deconstructing
    axios
      .post(this.BASE_URL + "/characters/", {
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(apiResult => {
        console.log(apiResult.data);
      })
      .catch(err => console.log(err));
  }

  updateOneRegister(updatedChar) {
    const { id, name, occupation, cartoon, weapon } = updatedChar;
    axios
      .patch(this.BASE_URL + "/characters/" + id, {
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(apiResult => {
        console.log(apiResult.data);
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
  }
}
