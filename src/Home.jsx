import React from 'react';
import styled from 'styled-components';
import {
  Alert, Button, Col, Row
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import Cat from './components/cat/Cat';
import { CatModel } from './components/js/catFactory';
import { connect } from './components/wallet/walletSaga';
import GenZeroCounter from './components/cat/GenZeroCounter';
import useWalletState from "./hooks/useWalletState";

const Featured = styled(Row)`
    max-width: 40rem;
`;

const Div = styled(Col)`
    transform: scale(0.75);
`;

export default function Home() {
  const dispatch = useDispatch();
  const { isConnected, web3ProviderAvailable } = useWalletState();

  const featured = [
    '3953145242385415',
    '1013934253901343',
    '1929825512645025',
    '4485804221431312',
    '1013934222421341',
  ];

  const featuredCats = featured.map((genes) => {
    const cat = new CatModel({ genes, });
    return (
      <Div key={genes}>
        <Cat model={cat} />
      </Div>
    );
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <div align="center" className="mt-2">
        <h1>New York Cats Game</h1>
        <p>
          Collect and breed furrever freinds!
          <br />
          <GenZeroCounter msg="Generation Zero Kitties have already been created. Get yours before they're all gone!" />
        </p>
      </div>
      {
        !isConnected && web3ProviderAvailable
          ? (
            <h3>
              <Button size="lg" onClick={() => dispatch(connect())}>
                Connect to get started
              </Button>
            </h3>
          )
          : null
      }
      {
        !web3ProviderAvailable
          ? (
            <Alert variant="danger">
              Web 3 provider not detected.
              {' '}
              <a
                href="https://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Please install Metamask
              </a>
              {' '}
              to get started.
            </Alert>
          )
          : null
      }
      <Featured>
        {featuredCats}
      </Featured>
    </div>
  );
}
