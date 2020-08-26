import { extendObservable } from 'mobx';
import CreateTicketForm from '../components/CreateTicketForm';

class PrioritiesStore {
	PrioritieData = {
		priorities: []
	};
}

export default new PrioritiesStore();
