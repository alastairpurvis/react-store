import { isEmpty, map } from 'lodash';

export default component => {
    const { user, orderErrors: errors, isLogged } = component.state;

    return [{
        name: 'billing.card',
        title: 'Card Number',
        validators: {
            required: true
        },
        value: user['shipping']['address1']
    }, {
        name: 'billing.date',
        title: 'MM/YY',
        validators: {
            required: true
        },
        value: user['shipping']['country']
    }, {
        name: 'billing.cvc',
        title: 'CVC / Security Code',
        validators: {
            required: true
        },
        value: user['shipping']['state']
    }, {
        name: 'billing.zip',
        title: 'Zip Code',
        validators: {
            required: true
        },
        value: user['shipping']['state']
    }];
};
