import { observable, action, runInAction, flow } from 'mobx'
import { Social, SocialType } from './social.model'

class Wallet {
	id
	title: string

	twitter: Social = { type: SocialType.TWITTER, link: "" }
	facebook: Social = { type: SocialType.FB, link: "" }
	instagram: Social = { type: SocialType.INSTAGRAM, link: "" }

	constructor(id: string, title: string) {
		this.id = id
		this.title = title
	}

	addSocial(social: Social) {
		switch (social.type) {
			case SocialType.FB:
				this.facebook = social
				break
			case SocialType.INSTAGRAM:
				this.instagram = social
				break
			case SocialType.TWITTER:
				this.twitter = social
				break
		}
	}
}

enum WalletType {
	ERC20, BEP20
}

export default Wallet