import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Form, SubmitButton, List } from './styles';
import Container from '../../Components/Container/index';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // carregar dados do localStorage assim que o component for renderizado em tela
  componentDidMount() {
    // recebendo dados presentes no localStorage por nome repositories
    const repositories = localStorage.getItem('repositories');

    // se tiver alguma coisa, colocamos o conteúdo de lá no state repositories
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // salvar os dados no localStorage
  componentDidUpdate(_, prevState) {
    // recebendo o state repositories
    const { repositories } = this.state;

    document.title = 'Home';

    // se o prevState(estado anterior do component) for diferente do atual
    // quer dizer que houve alteração
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  // newRepo recebe as mudanças do input
  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  // função que executa quando o form for submetido
  handleSubmit = async e => {
    // impede a página de recarregar
    e.preventDefault();

    // seta o valor de loading para true, para usar o icon de carregamento
    this.setState({ loading: true });

    // pega esses states do component
    const { newRepo, repositories } = this.state;

    // buscando na api do github
    const response = await api.get(`repos/${newRepo}`);

    // pegando apenas o nome
    const data = {
      name: response.data.full_name,
    };

    // setando um novo state no component
    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <span style={{ fontWeight: 'bold' }}>{repo.name}</span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
