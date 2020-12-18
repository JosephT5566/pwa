import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import ImageCard from '../../components/Card/ImageCard';

import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import UserContext from '../../contexts/UserContext';
import { mockService } from '../../apis/mock';
import { USER_TYPE, CARD_TYPE } from '../../assets/types';
import { getAllCardsOfUser, createCard, deleteCard } from '../../apis/CardAPI';

import './styles.scss';

export default function BankInfo() {
    const [cards, setCards] = useState([]);
    const { user } = useContext(UserContext);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const fetchCards = async () => {
        try {
            const response = await getAllCardsOfUser(user[USER_TYPE.id]);
            if (response.ok) {
                const _cards = await response.json();
                setCards([..._cards]);
            } else {
                throw new Error(t('alert.fetch-fail') + ': ' + response.status);
            }
        } catch (error) {
            window.alert(error);
        }
    };

    useEffect(() => {
        fetchCards();
    }, [user]);

    const onClickAddCards = async () => {
        if (window.confirm(t('bank.add-confirm'))) {
            try {
                // await mockService.appendBankItem(userID);
                const response = await createCard({ userID: user[USER_TYPE.id] });
                if (response.ok) {
                    await fetchCards();
                } else {
                    throw new Error(t('alert.create-fail') + ': ' + response.status);
                }
            } catch (error) {
                window.alert(error);
            }
        }
    };

    const onClickRemoveCards = async (cardID) => {
        // await mockService.removeBankItem(userID, cardID);
        if (window.confirm(t('bank.delete-confirm'))) {
            try {
                const response = await deleteCard(cardID);
                if (response.ok) {
                    await fetchCards();
                } else {
                    throw new Error(t('alert.delete-fail') + ': ' + response.status);
                }
            } catch (error) {
                window.alert(error);
            }
        }
    };

    const renderBankList = () => {
        const defaultImage = 'https://i.imgur.com/n24MrdT.gif';
        return (
            <>
                {cards.map((card, index) => (
                    <div key={index} className="bank-card-container">
                        <ImageCard
                            className="bank-card"
                            label={card[CARD_TYPE.cardName] !== '' ? card[CARD_TYPE.cardName] : `Card ${index}`}
                            image={card[CARD_TYPE.cardFrontImg] !== '' ? card[CARD_TYPE.cardFrontImg] : defaultImage}
                            onClick={() => {
                                navigation.navigate(`${currentURL}/${card[CARD_TYPE.id]}`);
                            }}
                        />
                        <IconButton
                            className="icon remove active"
                            onClick={async () => await onClickRemoveCards(card[CARD_TYPE.id])}
                        >
                            <RemoveCircle />
                        </IconButton>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div id="bank-info" className="ui container">
            <ArrowBackTitle title={t('bank.title')} />
            <div className="container lv2">
                <div className="title">
                    <h2>{t('bank.upload-bank-card')}</h2>
                </div>
                <div className="bank-list-container">
                    {renderBankList()}
                    <div className="icons-container">
                        <IconButton className="icon add active" onClick={onClickAddCards}>
                            <AddCircle fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
