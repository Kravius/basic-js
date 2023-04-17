function getEmailDomain(email) {
	return email.match(/\@[a-z].+\.com/g).join('').slice(1)
}

console.log(getEmailDomain('example-indeed@strange-example.com'))
//  usual.com))
