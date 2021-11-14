import { observable, flow, action, makeAutoObservable } from 'mobx'
import { WalletStore } from './wallet.store'

interface IAppStore {
	wallet: WalletStore
}

class AppStore implements IAppStore {
	wallet: WalletStore
	constructor() {
		makeAutoObservable(this)
		this.wallet = new WalletStore(this)
	}
}

export default AppStore