class HarryPotter {
  #apiBase = "https://potterapi-fedeperin.vercel.app/uk/";

  getResourse = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Щось не так із сервером... URL: ${url}, status: ${res.status}`,
      );
    }

    return await res.json();
  };

  getCharacter = async (id) => {
    const res = await this.getResourse(`${this.#apiBase}characters`);
    const character = res[id];
    return this.#transformCharacter(character);
  };

  getCharacters = async () => {
    const res = await this.getResourse(`${this.#apiBase}characters`);
    return res.slice(0, 6).map(this.#transformCharacter);
  };

  #transformCharacter = (res) => {
    return {
      id: res.index,
      name: res.fullName,
      nickname: res.nickname,
      img: res.image,
      birth: res.birthdate,
      inter: res.interpretedBys,
    };
  };
}

export default HarryPotter;
