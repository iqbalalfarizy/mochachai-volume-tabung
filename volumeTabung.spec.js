import { expect } from "chai";
import volumeTabung from "./volumeTabung.js";


describe('Unit Test untuk volumeTabung', function () {


	it('parameter yang valid', function () {
		const volume = volumeTabung(7, 7)

		expect(volume).to.equal(1077.566280181299)
	})

    it('parameter yang string', function () {
		const volume = volumeTabung(7,true)

		expect(volume).to.equal('parameter harus angka')
	})

    it('parameter yang kosong', function () {
		const volume = volumeTabung(7)

		expect(volume).to.equal('parameter harus diisi')
	})



})