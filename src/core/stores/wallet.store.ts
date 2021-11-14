
import { observable, action, runInAction, flow, makeAutoObservable } from 'mobx'
import Wallet from '../models/wallet.model'
import AppStore from './app.store'
import { IStore } from './interfaces'
import axios from 'axios'

export class WalletStore implements IStore {
	appStore: AppStore
	@observable id = ""
	@observable wallets: Wallet[] = []

	constructor(appStore: AppStore) {
		makeAutoObservable(this)
		this.appStore = appStore
	}

	@action
	create(id: string, title: string) {
		this.wallets.push(new Wallet(id, title))
	}
}
