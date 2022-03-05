/* eslint-disable react/jsx-pascal-case */
// import { PATH, REST_API } from 'api/consts';
// import { getAccountProps } from 'app/getAccountProps';
// import { Header_BTN } from './components/buttons/header.btn';
// import { Header } from './components/header/header';
// import { ListBlocks_Contract } from 'PAGES/modules/ListBlocks/list.blocks.contract';
// import './home.page.style.scss';
// import { useItemList } from 'app/hooks/useItemList';
// import { SortButtons } from 'config/SortButtons';
import { PaperBackground } from 'components/card/card'
import { PaymentForm } from 'components/forms/payment.form'
import { SubmitButton } from 'components/buttons/btns'
import { Header } from 'components/header/header'

export const MAIN_PAGE = () => (
	<PaperBackground>
		<Header label="Форма Оплаты" />
		<PaymentForm />
	</PaperBackground>
)
