import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import CatBox from './CatBox';
import CatActions from './CatActions';
import { selectKittiesByOwner } from './catSlice';
import { CatModel } from '../js/catFactory';
import { MediumCatContainer } from './CatBoxContainers';
import useWalletState from "../../hooks/useWalletState";


export default function CatList() {
  const { account } = useWalletState();
  const kitties = useSelector((state) => selectKittiesByOwner(state, account));

  if (!kitties.length) {
    return (
      <p>You have no kittes! Go to the Marketplace to adpot some!</p>
    );
  }

  const catBoxes = kitties.map((kitty) => {
    const model = new CatModel(kitty);
    return (
      <MediumCatContainer key={kitty.kittyId}>
        <CatBox model={model} />
        <CatActions kittyId={kitty.kittyId} isBuyMode={false} />
      </MediumCatContainer>
    );
  });

  return (
    <Container>
      <h1>My Kitties</h1>
      <div className="d-flex flex-wrap">
        {catBoxes}
      </div>
    </Container>
  );
}
