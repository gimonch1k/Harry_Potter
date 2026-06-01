import { useHttp } from "../hooks/http.hook";

const useHarryPotter = () => {
  const { loading, request, error } = useHttp();

  const _apiBase = "https://potterapi-fedeperin.vercel.app/uk/";

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters`);
    const character = res[id];
    return _transformCharacter(character);
  };

  const getCharacters = async (offset = 0) => {
    const res = await request(`${_apiBase}characters`);
    return res.slice(offset, offset + 9).map(_transformCharacter);
  };

  const getBooks = async (offset = 0) => {
    const res = await request(`${_apiBase}books`);
    return res.slice(offset, offset + 6).map(_transformBook);
  };

  const _transformCharacter = (res) => {
    return {
      id: res.index + 1,
      name: res.fullName,
      nickname: res.nickname,
      img: res.image,
      birth: res.birthdate,
      inter: res.interpretedBy,
      children: res.children,
    };
  };

  const _transformBook = (res) => {
    return {
      id: res.index + 1,
      title: res.title,
      cover: res.cover,
      pages: res.pages,
      description: res.description,
      original: res.originalTitle,
      release: res.releaseDate,
    };
  };

  return { loading, error, getCharacter, getCharacters, getBooks };
};

export default useHarryPotter;
