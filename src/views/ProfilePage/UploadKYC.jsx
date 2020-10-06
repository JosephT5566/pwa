import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import PasswordInput from '../../components/CustomInput/PasswordInput';
import TextInput from '../../components/CustomInput/TextInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import PhotoUpload from '../../components/PhotoUpload';
import Button from '../../components/Button';

import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './styles.scss';

const init_data = {
    bank: '',
    branch: '',
    account: '',
    pin: '',
    paymentPassword: '',
    onlineAccount: '',
    onlinePassword: '',
    securityCode: '',
    frontPhoto: null,
    backPhoto: null,
};

export default function UploadKYC() {
    const [data, setData] = useState(init_data);
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const renderInputs = () => {
        return (
            <>
                <TextInput
                    label={t('bank.bank')}
                    type={'text'}
                    required={true}
                    retriveValue={(value) => setData({ ...data, bank: value })}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.branch')}
                    type={'text'}
                    required={true}
                    retriveValue={(value) => setData({ ...data, branch: value })}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.account')}
                    type={'text'}
                    required={true}
                    retriveValue={(value) => setData({ ...data, account: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.pin')}
                    required={true}
                    retriveValue={(value) => setData({ ...data, pin: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.payment-password')}
                    required={true}
                    retriveValue={(value) => setData({ ...data, paymentPassword: value })}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.online-bank-account')}
                    type={'text'}
                    required={true}
                    retriveValue={(value) => setData({ ...data, onlineAccount: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.online-bank-password')}
                    required={true}
                    retriveValue={(value) => setData({ ...data, onlinePassword: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.security-code')}
                    required={true}
                    retriveValue={(value) => setData({ ...data, securityCode: value })}
                    isSubmit={isSubmit}
                />
            </>
        );
    };

    const isAllRequiredDataFilled = () => {
        for (let item in data) {
            if (data[item] === '' || data[item] === null) return false;
        }
        return true;
    };

    const onSubmit = () => {
        setIsSubmit(true);
        if (isAllRequiredDataFilled()) {
            // do something
        }
        setTimeout(() => {
            setIsSubmit(false);
        }, 50);
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title={t('bank.title')} />
            <div className="container lv2">
                <div className="alert">
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>{t('alert.warning')}</AlertTitle>
                        {t('bank.warning')}
                    </Alert>
                </div>
                <div className="title">
                    <h2>{t('bank.upload-header')}</h2>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <Tooltip
                            className="tooltip"
                            PopperProps={{
                                disablePortal: true,
                                popperOptions: {
                                    modifiers: {
                                        offset: {
                                            enabled: true,
                                            offset: '0, -25em',
                                        },
                                    },
                                },
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={t('bank.hint')}
                        >
                            <IconButton onClick={handleTooltipOpen}>
                                <HelpIcon />
                            </IconButton>
                        </Tooltip>
                    </ClickAwayListener>
                </div>
                <PhotoUpload
                    title={t('bank.front')}
                    required={true}
                    retriveValue={(picture) => setData({ ...data, frontPhoto: picture })}
                    isSubmit={isSubmit}
                />
                <PhotoUpload
                    title={t('bank.back')}
                    required={true}
                    retriveValue={(picture) => setData({ ...data, backPhoto: picture })}
                    isSubmit={isSubmit}
                />
                <div className="alert">
                    <Alert severity="info">{t('bank.warning-credential')}</Alert>
                </div>
            </div>
            <Divider />
            <div className="container lv2">
                <div className="title">
                    <h2 variant={'h5'}>{t('bank.bank-info-title')}</h2>
                </div>
                {renderInputs()}
                <Button label={t('bank.submit')} onClick={onSubmit}></Button>
            </div>
        </div>
    );
}
