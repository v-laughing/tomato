/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15189ecbeb27301d1d785a9565c242db"
  },
  {
    "url": "algorithm/analysis.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "algorithm/data-structure.html",
    "revision": "7f11326dc93454764a839722cda6db57"
  },
  {
    "url": "algorithm/find.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "algorithm/index.html",
    "revision": "caa9640404d28d2b10d48bd353eb830a"
  },
  {
    "url": "algorithm/other.html",
    "revision": "f971e56ce0579a52557115c390f527d5"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "27bb76bd7a306e4da5a2f379e096b607"
  },
  {
    "url": "algorithm/stack-queue.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "algorithm/union-set.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "archit/cache.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "archit/cluster.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "archit/distributed.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "archit/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "archit/msg-queue.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "archit/sys-design.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "assets/css/0.styles.03b51626.css",
    "revision": "cbec6b8d8851ac7854304777f9a38b7d"
  },
  {
    "url": "assets/img/_u4E0B_u8F7D.b26ab2b1.png",
    "revision": "b26ab2b1961d3d5ec274e95d21b85700"
  },
  {
    "url": "assets/img/011f3ef6-d824-4d43-8b2c-36dab8eaaa72-1.c2350789.png",
    "revision": "c23507898b611f04e4fa110e1108144d"
  },
  {
    "url": "assets/img/014fbc4d-d873-4a12-b160-867ddaed9807.c601d088.jpg",
    "revision": "c601d0884193d6b443a2113f1b8945d1"
  },
  {
    "url": "assets/img/02943a90-7dd4-4e9a-9325-f8217d3cc54d.4bf96136.jpg",
    "revision": "4bf961363fe7d22178b75446aa2b79ff"
  },
  {
    "url": "assets/img/02a1fbfd-7a9d-4114-95df-ca2445587a1f.d385f99b.jpg",
    "revision": "d385f99bcd6464fb14db0597e4d3914e"
  },
  {
    "url": "assets/img/047faac4-a368-4565-8331-2b66253080d3.ffd1805f.jpg",
    "revision": "ffd1805fccc9c3c5b9d08e561d7629af"
  },
  {
    "url": "assets/img/051e436c-0e46-4c59-8f67-52d89d656182.fd84f9ff.png",
    "revision": "fd84f9ffcb35287d0856421ba840e032"
  },
  {
    "url": "assets/img/067b310c-6877-40fe-9dcf-10654e737485.9ae6ee6a.jpg",
    "revision": "9ae6ee6a0db4c54ed7a653b9bceed817"
  },
  {
    "url": "assets/img/094e3ac8-e080-4e94-9f0a-64c25abc695e.1a81aa18.gif",
    "revision": "1a81aa184600e7e3f40057a7a0a52a5b"
  },
  {
    "url": "assets/img/0ad9f7ba-f408-4999-a77a-9b73562c9088.b16b0904.gif",
    "revision": "b16b0904f6dc2fbf3aa84ee43a3deaf0"
  },
  {
    "url": "assets/img/0c6f9930-8704-4a54-af23-19f9ca3e48b0.211d2a6b.jpg",
    "revision": "211d2a6bc9ff701b2028293d360285ee"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f-1572687622947.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dbc4f7d-05c9-4aae-8065-7b7ea7e9709e.cad84e73.gif",
    "revision": "cad84e7372e38e6a909fc698ebedc243"
  },
  {
    "url": "assets/img/0dd2d40a-5b2b-4d45-b176-e75a4cd4bdbf.19e71ada.png",
    "revision": "19e71ada3eedf86aad65a7e134f519b7"
  },
  {
    "url": "assets/img/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703.0c614d2e.jpg",
    "revision": "0c614d2e0551b71c20950b2243a6601f"
  },
  {
    "url": "assets/img/0f8d178b-52d8-491b-9dfd-41e05a952578.931aeb85.gif",
    "revision": "931aeb85e586be282460e416933e04fb"
  },
  {
    "url": "assets/img/101550414151983.a9116fc2.gif",
    "revision": "a9116fc2718b3e760e04b0153dc58961"
  },
  {
    "url": "assets/img/111521118015898.83662c9b.gif",
    "revision": "83662c9b61e6591c371f27a838c00e1d"
  },
  {
    "url": "assets/img/111521118445538.508122a2.gif",
    "revision": "508122a2f5cf603358d0e13e519c3727"
  },
  {
    "url": "assets/img/111521118483039.b379b76c.gif",
    "revision": "b379b76cd0a2e12c44e45d66f9f640cd"
  },
  {
    "url": "assets/img/111521118640738.c149bfd1.gif",
    "revision": "c149bfd1560369635d47650d3dfabb09"
  },
  {
    "url": "assets/img/111521119203347.2817dccb.gif",
    "revision": "2817dccb8da5a59439f58e211ae7c17b"
  },
  {
    "url": "assets/img/111521119368714.4306b9b7.gif",
    "revision": "4306b9b7a8de676392ea00b780f819d8"
  },
  {
    "url": "assets/img/111550414182638.e9760400.gif",
    "revision": "e97604005bbe893e3e3367c8feab047f"
  },
  {
    "url": "assets/img/11b27de5-5a9d-45e4-95cc-417fa3ad1d38.2fe1d3f2.jpg",
    "revision": "2fe1d3f22c8f0a728598697286eaa14c"
  },
  {
    "url": "assets/img/1202b2d6-9469-4251-bd47-ca6034fb6116.bd994a00.png",
    "revision": "bd994a00ff32e89dd98eeae5d3198c78"
  },
  {
    "url": "assets/img/14389ea4-8d96-4e96-9f76-564ca3324c1e.a9a348f7.png",
    "revision": "a9a348f7c52bcb6ba046e8b8c6442e04"
  },
  {
    "url": "assets/img/1492928416812_4.cada9038.png",
    "revision": "cada9038fe8d2e6951fce3ca32a25b12"
  },
  {
    "url": "assets/img/1492929000361_5.6ed5242e.png",
    "revision": "6ed5242ecfce91bc0611babacf774291"
  },
  {
    "url": "assets/img/1492929553651_7.80f8b28f.png",
    "revision": "80f8b28f3f9540e7b8afe6fa783f90d7"
  },
  {
    "url": "assets/img/1556770b-8c01-4681-af10-46f1df69202c.b216f659.jpg",
    "revision": "b216f659f1ac02ff8636c04b55db0977"
  },
  {
    "url": "assets/img/15851555-5abc-497d-ad34-efed10f43a6b.15cb81ce.png",
    "revision": "15cb81cec6c768a3f8c4f547a94a1adf"
  },
  {
    "url": "assets/img/1a9977e4-2f5c-49a6-aec9-f3027c9f46a7.7514c8bb.png",
    "revision": "7514c8bb695f36fbeb177ae5df7495c1"
  },
  {
    "url": "assets/img/2_14_microkernelArchitecture.72331340.jpg",
    "revision": "72331340b1279112eabbbff91a9e8508"
  },
  {
    "url": "assets/img/2-1.91dab1bf.png",
    "revision": "91dab1bf37841cd6261bd742dde96dfc"
  },
  {
    "url": "assets/img/22fda4ae-4dd5-489d-ab10-9ebfdad22ae0.9761f39b.jpg",
    "revision": "9761f39b4c3313112dacf09fa609c075"
  },
  {
    "url": "assets/img/23219e4c-9fc0-4051-b33a-2bd95bf054ab.8598acb7.jpg",
    "revision": "8598acb77cb95719bd01a51fe70dbcb2"
  },
  {
    "url": "assets/img/23b9d625-ef28-42b5-bb22-d7aedd007e16.123293dc.jpg",
    "revision": "123293dc12a8fce90c3432c8dc2d378a"
  },
  {
    "url": "assets/img/23ba890e-e11c-45e2-a20c-64d217f83430.75d54050.png",
    "revision": "75d540501b4979121d3834bca9bad183"
  },
  {
    "url": "assets/img/2719067e-b299-4639-9065-bed6729dbf0b.d7dc0987.png",
    "revision": "d7dc0987f82effcd38d61764fad8b1a2"
  },
  {
    "url": "assets/img/278fe431-af88-4a95-a895-9c3b80117de3.ec2c338f.jpg",
    "revision": "ec2c338fe1833becd6fe602d0508141d"
  },
  {
    "url": "assets/img/2a1f8b0f-1dd7-4409-b177-a381c58066ad.3047ff24.png",
    "revision": "3047ff2476ad98bb808191d79ba4e8b0"
  },
  {
    "url": "assets/img/2b8bfd57-b4d1-4a75-bfb0-bcf1fba4014a.7b05951a.png",
    "revision": "7b05951ab9cf32bc92c4881f96547d99"
  },
  {
    "url": "assets/img/2bcc58ad-bf7f-485c-89b5-e7cafc211ce2.b76d9a55.jpg",
    "revision": "b76d9a55a18c76ae345902a7ea501381"
  },
  {
    "url": "assets/img/3-3.58d7c741.png",
    "revision": "58d7c74141f73bf458bd72f20c773715"
  },
  {
    "url": "assets/img/3-5.9bf15f4a.png",
    "revision": "9bf15f4a4a223ef2aa999fc1b4d784b2"
  },
  {
    "url": "assets/img/3-6.9b4fab2a.png",
    "revision": "9b4fab2a60c0de08e2f57ac9f244ca49"
  },
  {
    "url": "assets/img/3-7.86ae4bd2.png",
    "revision": "86ae4bd202b6194cba5281a7555dae5a"
  },
  {
    "url": "assets/img/31b7e8de-ed11-4f69-b5fd-ba454120ac31.23df9ef5.jpg",
    "revision": "23df9ef5103e92fa7110d148ffeed177"
  },
  {
    "url": "assets/img/31d9adce-2af8-4754-8386-0aabb4e500b0.4beb6ffc.png",
    "revision": "4beb6ffc1608f22e830923f56a5eb715"
  },
  {
    "url": "assets/img/335fe19c-4a76-45ab-9320-88c90d6a0d7e.a38ff8ca.png",
    "revision": "a38ff8caa212b9ded22d0d642bad7fc1"
  },
  {
    "url": "assets/img/35253fa4-f60a-4e3b-aaec-8fc835aabdac.f96238de.gif",
    "revision": "f96238de82b08c2f0779641ee275ed91"
  },
  {
    "url": "assets/img/35a8c711-0dc0-4613-95f3-be96c6c6e104.792eec1b.gif",
    "revision": "792eec1bf5a2e627ef3ae67406fa6a8e"
  },
  {
    "url": "assets/img/379444c9-f1d1-45cd-b7aa-b0c18427d388.fd31fa30.jpg",
    "revision": "fd31fa30daacbcbb415b35795f70ce6e"
  },
  {
    "url": "assets/img/390c913b-5f31-444f-bbdb-2b88b688e7ce.50af6e00.jpg",
    "revision": "50af6e009784845b2cb645b1ab0b8336"
  },
  {
    "url": "assets/img/3d5b828e-5c4d-48d8-a440-281e4a8e1c92.2ba9f19f.png",
    "revision": "2ba9f19fdc1ceda5ec7d33f528533b13"
  },
  {
    "url": "assets/img/3ea280b5-be7d-471b-ac76-ff020384357c.aaa9b59f.gif",
    "revision": "aaa9b59f2d5f8f9c638bfcf96d5f3654"
  },
  {
    "url": "assets/img/437cb54c-5970-4ba9-b2ef-2541f7d6c81e.eafe6372.gif",
    "revision": "eafe6372da8beae23965e0350f68d5ec"
  },
  {
    "url": "assets/img/43d323ac-9f07-4e4a-a315-4eaf8c38766c.b101e8a3.jpg",
    "revision": "b101e8a3bf1d1a97a0dad9e8b3319ff4"
  },
  {
    "url": "assets/img/44d33643-1004-43a3-b99a-4d688a08d0a1.47cf56eb.png",
    "revision": "47cf56eb40f7d6b51702db8017b6ff50"
  },
  {
    "url": "assets/img/476329d4-e2ef-4f7b-8ac9-a52a6f784600.2876029c.png",
    "revision": "2876029ca807bde0916b436215f43eb1"
  },
  {
    "url": "assets/img/47d98583-8bb0-45cc-812d-47eefa0a4a40.aa1fc122.jpg",
    "revision": "aa1fc12212b7e6d3585b3b057fdafa31"
  },
  {
    "url": "assets/img/49d2adc1-b28a-44bf-babb-d44993f4a2e3.90c8c1c7.gif",
    "revision": "90c8c1c7d3aed5e0874bc09d4cce3453"
  },
  {
    "url": "assets/img/4ab87717-e264-4232-825d-8aaf08f14e8b.00498410.jpg",
    "revision": "00498410aa268dec6416e00683d3d32d"
  },
  {
    "url": "assets/img/4c457532-550b-4eca-b881-037b84b4934b.acd43cda.jpg",
    "revision": "acd43cdabc8146741ef85338e51b0b9b"
  },
  {
    "url": "assets/img/4cf711a8-7ab2-4152-b85c-d5c226733807.fb25bb47.png",
    "revision": "fb25bb47be56baf5eda32b9a50cdd358"
  },
  {
    "url": "assets/img/5-1.b7b02277.png",
    "revision": "b7b02277603e82f0f334fce8854375d0"
  },
  {
    "url": "assets/img/50831a6f-2777-46ea-a571-29f23c85cc21.f19d985f.jpg",
    "revision": "f19d985f9b2d5a63d11cd6fc9066ea9f"
  },
  {
    "url": "assets/img/51e2ed95-65b8-4ae9-8af3-65602d452a25.cc8e319f.jpg",
    "revision": "cc8e319fdb5ba49d1f64998e85ba9dda"
  },
  {
    "url": "assets/img/55dc4e84-573d-4c13-a765-52ed1dd251f9.fe9d48e9.png",
    "revision": "fe9d48e93a18fb595ccc4e13b7a6c96c"
  },
  {
    "url": "assets/img/5f5c22d5-9c0e-49e1-b5b0-6cc7032724d4.b29547de.png",
    "revision": "b29547dee410c901c718fb1a0733cef6"
  },
  {
    "url": "assets/img/6-2.79b06058.png",
    "revision": "79b06058bda67c7da463f599ba51a600"
  },
  {
    "url": "assets/img/6019b2db-bc3e-4408-b6d8-96025f4481d6.526a760a.png",
    "revision": "526a760a355ca94a1263dbb99e5899fb"
  },
  {
    "url": "assets/img/60c4a44c-7829-4242-b3a1-26c3b513aaf0.231a6b0f.gif",
    "revision": "231a6b0fe52ab24fcd061cf570fe50c1"
  },
  {
    "url": "assets/img/62e77997-6957-4b68-8d12-bfd609bb2c68.61cc0271.jpg",
    "revision": "61cc02718498f89439d43de60650edda"
  },
  {
    "url": "assets/img/63c8ffea-a9f2-4ebe-97d1-d71be71246f9.fc127e60.jpg",
    "revision": "fc127e60a05e87f50e469cd6fe7d9159"
  },
  {
    "url": "assets/img/643b6f18-f933-4ac5-aa7a-e304dbd7fe49.91f19b25.gif",
    "revision": "91f19b25dfad8c40f58e7f0ad120d3f2"
  },
  {
    "url": "assets/img/66192382-558b-4b05-a35d-ac4a2b1a9811.8f9e192a.jpg",
    "revision": "8f9e192a3088a3191940f352bec05910"
  },
  {
    "url": "assets/img/6980aef0-debe-4b4b-8da5-8b1befbc1408.3a357aa5.gif",
    "revision": "3a357aa51f518a79f740282e310a623d"
  },
  {
    "url": "assets/img/6b833bc2-517a-4270-8a5e-0a5f6df8cd96.0d43ee1e.png",
    "revision": "0d43ee1e640714393d8b0581cfd99c00"
  },
  {
    "url": "assets/img/7002c01b-1ed5-475a-9e5f-5fc8a4cdbcc0.4fc3f365.jpg",
    "revision": "4fc3f36584574dc3ccaa6cdd5d4a8248"
  },
  {
    "url": "assets/img/7008dc2b-6f13-4174-a516-28b2d75b0152.0778eb2b.gif",
    "revision": "0778eb2b5a4731a8b6f764b78fc0b960"
  },
  {
    "url": "assets/img/71550414107576.c5716777.gif",
    "revision": "c571677785e2d616c058eff45bb3eccb"
  },
  {
    "url": "assets/img/7818c574-97a8-48db-8e62-8bfb030b02ba.82e9bae7.png",
    "revision": "82e9bae7b79ab5a331263707f302ab24"
  },
  {
    "url": "assets/img/79c6f036-bde6-4393-85a3-ef36a0327bd2.4f4a453c.png",
    "revision": "4f4a453c33acb49bfccd18d101bce4a8"
  },
  {
    "url": "assets/img/7a29acce-f243-4914-9f00-f2988c528412.4072191d.jpg",
    "revision": "4072191d63b7caddf998cb2fe821db27"
  },
  {
    "url": "assets/img/7a85e285-e152-4116-b6dc-3fab27ba9437.61e72571.jpg",
    "revision": "61e72571f50fe64d2b175e563a958b90"
  },
  {
    "url": "assets/img/7b281b1e-0595-402b-ae35-8c91084c33c1.b474cff8.png",
    "revision": "b474cff84a3523ae4fac997c7daeefc3"
  },
  {
    "url": "assets/img/7b3efa99-d306-4982-8cfb-e7153c33aab4.07a03d4d.png",
    "revision": "07a03d4da61ff30b82bcff25256c3c23"
  },
  {
    "url": "assets/img/7bd202a7-93d4-4f3a-a878-af68ae25539a.cc646fa6.png",
    "revision": "cc646fa6b311a937a1c795d0f5100dd9"
  },
  {
    "url": "assets/img/7c54de21-e2ff-402e-bc42-4037de1c1592.77db1027.png",
    "revision": "77db1027e909ec6163894226247da7a9"
  },
  {
    "url": "assets/img/8-1.d9a7e4d7.png",
    "revision": "d9a7e4d7f5d104297caba941001205bd"
  },
  {
    "url": "assets/img/8-2.b9ca27fd.png",
    "revision": "b9ca27fd9836ff74c494e3b5c47430e8"
  },
  {
    "url": "assets/img/8-4.ffa93066.png",
    "revision": "ffa9306652bb68067144574352f5ad4b"
  },
  {
    "url": "assets/img/8-5.13a44fc3.png",
    "revision": "13a44fc3c04809e103f72876ad97bcb8"
  },
  {
    "url": "assets/img/8006a450-6c2f-498c-a928-c927f758b1d0.d6129289.png",
    "revision": "d61292895db07e1bc0ccf8eb6cc1d0fb"
  },
  {
    "url": "assets/img/807f4258-dba8-4c54-9c3c-a707c7ccffa2.cc337f66.jpg",
    "revision": "cc337f668beb09747c5b0f19b5aff345"
  },
  {
    "url": "assets/img/81538cd5-1bcf-4e31-86e5-e198df1e013b.1de539c4.jpg",
    "revision": "1de539c45e97c39d6369985f5c07d36c"
  },
  {
    "url": "assets/img/83d466bd-946b-4430-854a-cf7b0696d4c8.5792e8b9.jpg",
    "revision": "5792e8b969ac843ac1b04017cd0bfce2"
  },
  {
    "url": "assets/img/8441b2c4-dca7-4d6b-8efb-f22efccaf331.c3a0c699.png",
    "revision": "c3a0c699a59b8418037eb040ee8a1430"
  },
  {
    "url": "assets/img/8442519f-0b4d-48f4-8229-56f984363c69.8b780e78.png",
    "revision": "8b780e78a0af2dc2c728245a69cc590c"
  },
  {
    "url": "assets/img/84a5b15a-86c5-4d8e-9439-d9fd5a4699a1.47d5395e.jpg",
    "revision": "47d5395e871ace9d9acd0eec67911ac9"
  },
  {
    "url": "assets/img/85c05fb1-5546-4c50-9221-21f231cdc8c5.b6dcbf8d.jpg",
    "revision": "b6dcbf8d4b16bc4f6d9b63e20cb473d9"
  },
  {
    "url": "assets/img/86e6a91d-a285-447a-9345-c5484b8d0c47.2e9e39c4.png",
    "revision": "2e9e39c426a74a61ce17a52fe7bd7d07"
  },
  {
    "url": "assets/img/89292ae1-5f13-44dc-b508-3f035e80bf89.7d175ab5.png",
    "revision": "7d175ab52123e7f573febb1db5dacd2b"
  },
  {
    "url": "assets/img/8996a537-7c4a-4ec8-a3b7-7ef1798eae26.fa3d063c.png",
    "revision": "fa3d063cb9699fa357de03acee03389d"
  },
  {
    "url": "assets/img/8edc5164-810b-4cc5-bda8-2a2c98556377.b7fd8ffa.jpg",
    "revision": "b7fd8ffaf037c109953da10910425a03"
  },
  {
    "url": "assets/img/91550414131331.e60d9756.gif",
    "revision": "e60d9756f05d881d5d33906655fc0ed5"
  },
  {
    "url": "assets/img/924914c0-660c-4e4a-bbc0-1df1146e7516.ca65b368.jpg",
    "revision": "ca65b368fa76427863580bb17a1158dc"
  },
  {
    "url": "assets/img/95080fae-de40-463d-a76e-783a0c677fec.7c2c842a.gif",
    "revision": "7c2c842a66aa96edb8121dc0df53cea7"
  },
  {
    "url": "assets/img/95903878-725b-4ed9-bded-bc4aae0792a9.09890279.jpg",
    "revision": "09890279d02597c9f902030483eb7a02"
  },
  {
    "url": "assets/img/9709694b-db05-4cce-8d2f-1c8b09f4d921.4606122a.png",
    "revision": "4606122a15881481de12a694053deee2"
  },
  {
    "url": "assets/img/9b679ff5-94c6-48a7-b9b7-2ea868e828ed.bf0c6b39.png",
    "revision": "bf0c6b39f7784ee5016c6efee912e3dd"
  },
  {
    "url": "assets/img/9b838aee-0996-44a5-9b0f-3d1e3e2f5100.caeb1541.png",
    "revision": "caeb1541230c140c1a57d9b06ddf8b38"
  },
  {
    "url": "assets/img/9bbddeeb-e939-41f0-8e8e-2b1a0aa7e0a7.992c8043.png",
    "revision": "992c80433fe0f5b553a4bea464ab6057"
  },
  {
    "url": "assets/img/9c422923-1447-4a3b-a4e1-97e663738187.214860dd.jpg",
    "revision": "214860dd7369d03709b08969a1d41432"
  },
  {
    "url": "assets/img/9cd0ae20-4fb5-4017-a000-f7d3a0eb3529.27d73d89.png",
    "revision": "27d73d89815b310aacdb11e2317112ed"
  },
  {
    "url": "assets/img/9d1deeba-4ae1-41dc-98f4-47d85b9831bc.6d9db2f8.gif",
    "revision": "6d9db2f8df9c41e3c24d77d2ce8f0789"
  },
  {
    "url": "assets/img/9daa3616-00a4-48c4-9146-792dc8499be3.dc6e1905.jpg",
    "revision": "dc6e1905e372da6b3b295fe190dd8beb"
  },
  {
    "url": "assets/img/a3253deb-8d21-40a1-aae4-7d178e4aa319.b57e32c7.jpg",
    "revision": "b57e32c7e2d015b1e0e8e48b0167d739"
  },
  {
    "url": "assets/img/a42ad3a7-3574-4c48-a783-ed3d08a0688a.bfd432ca.jpg",
    "revision": "bfd432ca24fc04f5f7588cc330c20ef8"
  },
  {
    "url": "assets/img/a9077f06-7584-4f2b-8c20-3a8e46928820.2d5e2e03.jpg",
    "revision": "2d5e2e03d640eebdc1743aa8af7164d3"
  },
  {
    "url": "assets/img/ac6a794b-68c0-486c-902f-8d988eee5766.6507f605.png",
    "revision": "6507f60556a8b83d59228226ecad9853"
  },
  {
    "url": "assets/img/ad5cc8fc-d59b-45ce-8899-63a18320d97e.98408b96.gif",
    "revision": "98408b9669398d14763f02560200ce10"
  },
  {
    "url": "assets/img/af198da1-2480-4043-b07f-a3b91a88b815.1f88a047.png",
    "revision": "1f88a04756c0032ce3c9e8273b58429e"
  },
  {
    "url": "assets/img/b0611f89-1e5f-4494-a795-3544bf65042a.fcec1186.gif",
    "revision": "fcec11861486522e3dad8d8dc9d3f136"
  },
  {
    "url": "assets/img/b1fa0453-a4b0-4eae-a352-48acca8fff74.a5a1315f.png",
    "revision": "a5a1315fdf2207fa36571800622d12d4"
  },
  {
    "url": "assets/img/b396d726-b75f-4a32-89a2-03a7b6e19f6f.62b33b5e.jpg",
    "revision": "62b33b5eca6ad5d414fe8c642f867976"
  },
  {
    "url": "assets/img/b54eeb16-0b0e-484c-be62-306f57c40d77.2b0195fb.jpg",
    "revision": "2b0195fb258589a724391840bb727cda"
  },
  {
    "url": "assets/img/b8922f8c-95e6-4187-be85-572a509afb71.e462b600.png",
    "revision": "e462b600f152792c306e4711adacf32b"
  },
  {
    "url": "assets/img/b903fda8-07d0-46a7-91a7-e803892895cf.7a662579.gif",
    "revision": "7a662579a815828a7e175142e178d328"
  },
  {
    "url": "assets/img/b988877c-0f0a-4593-916d-de2081320628.68e019e5.jpg",
    "revision": "68e019e5f0f58169d13298a2659a77db"
  },
  {
    "url": "assets/img/b9d79a5a-e7af-499b-b989-f10483e71b8b.36485444.jpg",
    "revision": "364854448051cb9e983847d9624cb3fa"
  },
  {
    "url": "assets/img/baaa681f-7c52-4198-a5ae-303b9386cf47.cd136380.png",
    "revision": "cd1363804a4c1a590dafd3c2577b75b9"
  },
  {
    "url": "assets/img/bb6a49be-00f2-4f27-a0ce-4ed764bc605c.9a7eeb4b.png",
    "revision": "9a7eeb4b33c0a5e2c9b2fb06ad0d121b"
  },
  {
    "url": "assets/img/bc6be2d0-ed5e-4def-89e5-3ada9afa811a.3dd297f2.gif",
    "revision": "3dd297f2808b0759c08f524ec6f170bb"
  },
  {
    "url": "assets/img/be5c2c61-86d2-4dba-a289-b48ea23219de.123be26b.jpg",
    "revision": "123be26b3b71f23def2d5350d2c9b53a"
  },
  {
    "url": "assets/img/be608a77-7b7f-4f8e-87cc-f2237270bf69.3b662049.png",
    "revision": "3b662049f6ad09720f65c117d275caae"
  },
  {
    "url": "assets/img/bf667594-bb4b-4634-bf9b-0596a45415ba.55baa72f.jpg",
    "revision": "55baa72ff5a4049fa3e2727606e41726"
  },
  {
    "url": "assets/img/bfea8772-d01b-4a51-8adc-edfd7d3dce84.b9c52d74.jpg",
    "revision": "b9c52d7413bf137f1728e9a63489362c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/browser_parse_html.a4a99b39.png",
    "revision": "a4a99b39482c51213380a22373f467d0"
  },
  {
    "url": "assets/img/browser_parse_rendertree.b8b35e2b.png",
    "revision": "b8b35e2bcd6a5fb65c9277bbde01fb37"
  },
  {
    "url": "assets/img/BSD_disk.34444dfd.png",
    "revision": "34444dfd6081914f90150a249aa85e8e"
  },
  {
    "url": "assets/img/btree.6c3c1bb9.png",
    "revision": "6c3c1bb99e9357c0e3227934b583f18c"
  },
  {
    "url": "assets/img/c0874e0a-dba3-467e-9c86-dd9313e0843e.f550b50e.jpg",
    "revision": "f550b50e2a2deab1b79b23f421f2e9b7"
  },
  {
    "url": "assets/img/c0a9fa91-da2e-4892-8c9f-80206a6f7047.b2e3b1fb.png",
    "revision": "b2e3b1fbee3782d44692ed61238caa81"
  },
  {
    "url": "assets/img/c13e2a3d-b01c-4a08-a69b-db2c4e821e09.25e7840e.png",
    "revision": "25e7840e8f8de83e657ac5103741a31f"
  },
  {
    "url": "assets/img/c269e362-1128-4212-9cf3-d4c12b363b2f.81d0ed34.gif",
    "revision": "81d0ed342a1fe627e279efa8693bba94"
  },
  {
    "url": "assets/img/c2ca8dd2-8d00-4a3e-bece-db7849ac9cfd.ee8c750b.gif",
    "revision": "ee8c750b9d2b81ab0a0b99f2b78959b0"
  },
  {
    "url": "assets/img/c3369072-c740-43b0-b276-202bd1d3960d.172deddf.jpg",
    "revision": "172deddfdfd7d9cb32dd2619395f5a3f"
  },
  {
    "url": "assets/img/c34f4503-f62c-4043-9dc6-3e03288657df.97c84f0d.jpg",
    "revision": "97c84f0d61c70f80098feac4131bbab3"
  },
  {
    "url": "assets/img/c44a0342-f405-4f17-b750-e27cf4aadde2.e30c8c71.png",
    "revision": "e30c8c71803b133bed8a4725d2bd9da0"
  },
  {
    "url": "assets/img/c4859290-e27d-4f12-becf-e2a5c1f3a275.ec1283b2.gif",
    "revision": "ec1283b2ab45512b0dd5f6874406187c"
  },
  {
    "url": "assets/img/c625baa0-dde6-449e-93df-c3a67f2f430f.45b5d841.jpg",
    "revision": "45b5d841a796745554f8a83964ff94c0"
  },
  {
    "url": "assets/img/c9cfd600-bc91-4f3a-9f99-b42f88a5bb24.f12aeac2.jpg",
    "revision": "f12aeac29005498dcfaca8c9b1812600"
  },
  {
    "url": "assets/img/cbf50eb8-22b4-4528-a2e7-d187143d57f7.b108df16.png",
    "revision": "b108df167c7cb60ed2917ad3a0e62f37"
  },
  {
    "url": "assets/img/cf4386a1-58c9-4eca-a17f-e12b1e9770eb.11cef3a7.png",
    "revision": "11cef3a715cf5826320dc509a2ae3c0a"
  },
  {
    "url": "assets/img/d156bcda-ac8d-4324-95e0-0c8df41567c9.3f9e35f2.gif",
    "revision": "3f9e35f284216fcab8b5dfc25a8a3710"
  },
  {
    "url": "assets/img/d27c99f0-7881-4f2d-9675-c75cbdee3acd.3190051f.jpg",
    "revision": "3190051fe890050d039f6230ca797fb1"
  },
  {
    "url": "assets/img/d2ae9932-e2b1-4191-8ee9-e573f36d3895.9703e915.png",
    "revision": "9703e915dd52060a89a01a455faa7e5b"
  },
  {
    "url": "assets/img/db5e376d-0b3e-490e-a43a-3231914b6668.4de001bc.png",
    "revision": "4de001bc1fa5061c6cddc6f70420bdef"
  },
  {
    "url": "assets/img/db5f30a7-8bfa-4ecc-ab5d-747c77818964.e4125e56.gif",
    "revision": "e4125e56fc4da0c96db857fc4ebc9e5e"
  },
  {
    "url": "assets/img/dd563037-fcaa-4bd8-83b6-b39d93a12c77.bf2827bc.jpg",
    "revision": "bf2827bca492f32d1b6a9e9f4f22510f"
  },
  {
    "url": "assets/img/dns.3f60e2b9.jpg",
    "revision": "3f60e2b9e392884a913801ed7cf4f84f"
  },
  {
    "url": "assets/img/docker-filesystems-busyboxrw.7e83ec9b.png",
    "revision": "7e83ec9b275f1b8648338f5d16d41a45"
  },
  {
    "url": "assets/img/e130e5b8-b19a-4f1e-b860-223040525cf6.264739fc.jpg",
    "revision": "264739fc0a32ffc6d67d75e202590cb0"
  },
  {
    "url": "assets/img/e69537d2-a016-4676-b169-9ea17eeb9037.82d1f1b1.gif",
    "revision": "82d1f1b18201036f9573f17c1666e40c"
  },
  {
    "url": "assets/img/e92d0ebc-7d46-413b-aec1-34a39602f787.c4ffddc0.png",
    "revision": "c4ffddc0126f19d53517240449f63f32"
  },
  {
    "url": "assets/img/e98deb5a-d5d4-4294-aa9b-9220d4483403.86f9e225.jpg",
    "revision": "86f9e2255f3fef2d645f0463d4869d75"
  },
  {
    "url": "assets/img/e98e9d20-206b-4533-bacf-3448d0096f38.b278d7e2.png",
    "revision": "b278d7e2d0343ddf7989c3d2b216bedf"
  },
  {
    "url": "assets/img/ed5522bb-3a60-481c-8654-43e7195a48fe.f1d9d5d8.png",
    "revision": "f1d9d5d842333deaf021088187799c9a"
  },
  {
    "url": "assets/img/ef25ff7c-0f63-420d-8b30-eafbeea35d11.17851455.gif",
    "revision": "1785145538c5aa8422b7edb31602140d"
  },
  {
    "url": "assets/img/f1912ba6-6402-4321-9aa8-13d32fd121d1.a6da67f7.jpg",
    "revision": "a6da67f7c81aa694387e3061c3a34bfe"
  },
  {
    "url": "assets/img/f61b5419-c94a-4df1-8d4d-aed9ae8cc6d5.d386ee48.png",
    "revision": "d386ee4801e75e52204c52477df4b2d5"
  },
  {
    "url": "assets/img/f7c1fea2-c1e7-4d31-94b5-0d9df85e093c.a96df49f.gif",
    "revision": "a96df49f4f3c3da742d2bf6172cbf511"
  },
  {
    "url": "assets/img/f9978fa6-9f49-4a0f-8540-02d269ac448f.202678c6.png",
    "revision": "202678c69db1e18da6f343bc4c844e14"
  },
  {
    "url": "assets/img/f99ee771-c56f-47fb-9148-c0036695b5fe.c9af962c.jpg",
    "revision": "c9af962cce82b1688975969d37b10f6c"
  },
  {
    "url": "assets/img/fb44307f-8e98-4ff7-a918-31dacfa564b4.4a00728b.jpg",
    "revision": "4a00728bf98524731bec77f8cce5fd33"
  },
  {
    "url": "assets/img/fcc941ec-134b-4dcd-bc86-1702fd305300.ababe5c1.gif",
    "revision": "ababe5c10ce5c1db688dd9ce264acb3a"
  },
  {
    "url": "assets/img/flex-item.e88d6f97.jpg",
    "revision": "e88d6f976ee5b0ea0ff2e5da8d392035"
  },
  {
    "url": "assets/img/flex-wrap.08ef17b5.jpg",
    "revision": "08ef17b543a5a55dcd77b9091407a132"
  },
  {
    "url": "assets/img/flex0.6a95a7f0.jpg",
    "revision": "6a95a7f098e4364dc0084e6a5e5fa0db"
  },
  {
    "url": "assets/img/grid-align.8843c2d8.jpg",
    "revision": "8843c2d87579b401bc9b897a6c76a707"
  },
  {
    "url": "assets/img/grid.5a6926f9.jpg",
    "revision": "5a6926f963b24d0928ff3c83f3a1f6b8"
  },
  {
    "url": "assets/img/GUID_Partition_Table_Scheme.svg.3206264f.png",
    "revision": "3206264fe6c6c261e8fc0c6008627f5f"
  },
  {
    "url": "assets/img/How-HTTPS-Works.2de21035.png",
    "revision": "2de21035db40e031598347202665b0ce"
  },
  {
    "url": "assets/img/html-parase.3eb44c71.png",
    "revision": "3eb44c711f810178213693b8a7980299"
  },
  {
    "url": "assets/img/HTTP_RequestMessageExample.a7d09052.png",
    "revision": "a7d09052baf0c53c029c3dd961111505"
  },
  {
    "url": "assets/img/HTTP_ResponseMessageExample.41b72360.png",
    "revision": "41b723609ccd64ed3f9f54d73ea179c8"
  },
  {
    "url": "assets/img/http-tls.b17df166.jpg",
    "revision": "b17df166cf51ab0a294c481569ec222b"
  },
  {
    "url": "assets/img/image-20191130164425351.8f94bb44.png",
    "revision": "8f94bb4427691a32e80cd3b9d60bb53c"
  },
  {
    "url": "assets/img/image-20191207210437023.1e7c216d.png",
    "revision": "1e7c216d3e8426ecbf0f37771b09aa17"
  },
  {
    "url": "assets/img/image-20191207214442687.2c9f6cf1.png",
    "revision": "2c9f6cf11138ddbc880cb89fba923e00"
  },
  {
    "url": "assets/img/image-20191207220440451.14bbbcce.png",
    "revision": "14bbbcce145e1c13ecd086fee2276f13"
  },
  {
    "url": "assets/img/image-20191207220831843.4e6ea415.png",
    "revision": "4e6ea4157f795d2583d72e359b832618"
  },
  {
    "url": "assets/img/image-20191207221313819.26a06bad.png",
    "revision": "26a06bad226961e1214aff908ebe01db"
  },
  {
    "url": "assets/img/image-20191207221744244.476d0dbe.png",
    "revision": "476d0dbe15e4718b9fd37f33f50a580a"
  },
  {
    "url": "assets/img/image-20191207221920368.6722915a.png",
    "revision": "6722915af752f61aed709ed72474841e"
  },
  {
    "url": "assets/img/image-20191207222102010.81bbed7c.png",
    "revision": "81bbed7cb2b8fea3834125f60cd39a9e"
  },
  {
    "url": "assets/img/image-20191207222134306.d2cb7642.png",
    "revision": "d2cb764243b85e14fdea0bec365a8c12"
  },
  {
    "url": "assets/img/image-20191207222237925.c4e06159.png",
    "revision": "c4e061594813f3bd58e8575da1baf133"
  },
  {
    "url": "assets/img/image-20191208171445674.aa5f9eac.png",
    "revision": "aa5f9eac7569ffa7b0bff1a097f4e662"
  },
  {
    "url": "assets/img/image-20191208195941661.d249e446.png",
    "revision": "d249e44600345e94a095c70d8345f5bc"
  },
  {
    "url": "assets/img/image-20191208200014395.ed7aebe9.png",
    "revision": "ed7aebe9eb7cebe8d07394696baf7ccf"
  },
  {
    "url": "assets/img/image-20191208200543923.0da61fcf.png",
    "revision": "0da61fcfdb4c3743514e1f0205752402"
  },
  {
    "url": "assets/img/image-20191208200656794.e6ac2aee.png",
    "revision": "e6ac2aeeb52af93fcb21341d494751c8"
  },
  {
    "url": "assets/img/image-20191208203034705.849e5983.png",
    "revision": "849e59834569dd55e0eb244a0c891e95"
  },
  {
    "url": "assets/img/image-20191208203112400.ee3515f7.png",
    "revision": "ee3515f707c04e0ece85ae21a3d676f4"
  },
  {
    "url": "assets/img/image-20191208203142527.7f6a3fd9.png",
    "revision": "7f6a3fd962d540d34d7bd4971812f0cc"
  },
  {
    "url": "assets/img/image-20191208203219927.17daa91a.png",
    "revision": "17daa91ab34a739927332d040dd6420e"
  },
  {
    "url": "assets/img/image-20191208203639712.11b36a94.png",
    "revision": "11b36a943be04ce63207ad8c5a2f70ec"
  },
  {
    "url": "assets/img/image-20191208204118932.11e20472.png",
    "revision": "11e2047273f53486938adf904e3cceeb"
  },
  {
    "url": "assets/img/image-20191208220948084.4332dea8.png",
    "revision": "4332dea86a15b2707603c6870c6f05a9"
  },
  {
    "url": "assets/img/image-20191208224757855.3f69eed5.png",
    "revision": "3f69eed5ffbf88f9f371e0e6de674a14"
  },
  {
    "url": "assets/img/image-20191208225301973.2e140dd0.png",
    "revision": "2e140dd0af081f337f95e0a46c31a138"
  },
  {
    "url": "assets/img/image-20191208232221265.062048a6.png",
    "revision": "062048a6c1947e278e8bac4e827d4a47"
  },
  {
    "url": "assets/img/image-20191208233940066.1ee90493.png",
    "revision": "1ee90493632945815cd2150128be3e66"
  },
  {
    "url": "assets/img/image-20191208234948205.473084c1.png",
    "revision": "473084c1faee614f19b67354121dcf53"
  },
  {
    "url": "assets/img/image-20191208235258643.5b31cf98.png",
    "revision": "5b31cf98e9534a2793fd1f72fe7d9421"
  },
  {
    "url": "assets/img/image-20191209001038024.033c979e.png",
    "revision": "033c979e94277df59d4cf291fd7ab001"
  },
  {
    "url": "assets/img/image-20191209002818626.b78e18af.png",
    "revision": "b78e18afc6a1fa81ff096f56f967a8af"
  },
  {
    "url": "assets/img/image-20191209003453268.a76d2392.png",
    "revision": "a76d2392e1c2331273e557a279e9043e"
  },
  {
    "url": "assets/img/image-20191210004132894.90a7dba7.png",
    "revision": "90a7dba781754b861bdb745287fb181e"
  },
  {
    "url": "assets/img/image-20191212011250613.70ddce92.png",
    "revision": "70ddce92d6d6893339adaf72f2bf91d4"
  },
  {
    "url": "assets/img/image-20191212011410374.cd8d4c18.png",
    "revision": "cd8d4c18c4b50684888c464ae503ebaa"
  },
  {
    "url": "assets/img/image-20191212011747967.44efc7a1.png",
    "revision": "44efc7a1e8cda842239fea2530bc8a53"
  },
  {
    "url": "assets/img/inode_with_signatures.6a497c68.jpg",
    "revision": "6a497c680ed6df8b77c83b76e8772675"
  },
  {
    "url": "assets/img/js_load.909c198b.png",
    "revision": "909c198b7ef020ad8529cfa97f4ffd6f"
  },
  {
    "url": "assets/img/js-event-task.65dc91d8.png",
    "revision": "65dc91d8398830e9ee94df8cca81066a"
  },
  {
    "url": "assets/img/js-extend.cff66ffb.jpg",
    "revision": "cff66ffb4b8b87fc5291e24499392ff5"
  },
  {
    "url": "assets/img/js-proto-layout.77f750f2.png",
    "revision": "77f750f2d8db3ea5120daae3c3d8eb56"
  },
  {
    "url": "assets/img/js-task.4195df67.png",
    "revision": "4195df679aa0dc3f2f7f8b5e023cdf30"
  },
  {
    "url": "assets/img/linux-filesystem.bee94538.png",
    "revision": "bee94538cf084ef7522069597a772def"
  },
  {
    "url": "assets/img/margin.e44310b4.png",
    "revision": "e44310b4ba9321ff29f9f348207805a5"
  },
  {
    "url": "assets/img/master-slave-proxy.077ac719.png",
    "revision": "077ac71910b1c1e212ab8b92df465c6e"
  },
  {
    "url": "assets/img/master-slave.c5e66808.png",
    "revision": "c5e66808c1b34395e8a06b25f5ded53c"
  },
  {
    "url": "assets/img/mvc.fdbaa388.png",
    "revision": "fdbaa38859afead9a8680a6810627d1f"
  },
  {
    "url": "assets/img/mvvm.b1973f93.png",
    "revision": "b1973f93adba97ef8f84be2922b712a4"
  },
  {
    "url": "assets/img/Network_GBN-action.172d0530.png",
    "revision": "172d053019aa7d71b0b5c156c18d7eb5"
  },
  {
    "url": "assets/img/network-of-networks.10dfc657.gif",
    "revision": "10dfc6578d149003adc0f091cb087e08"
  },
  {
    "url": "assets/img/nginx2flask.123d611c.jpg",
    "revision": "123d611cd739011e5c26d1e8f72c7d66"
  },
  {
    "url": "assets/img/oddevenlist.353f6608.png",
    "revision": "353f660862dbe6be9a1e5f350da375fb"
  },
  {
    "url": "assets/img/Partition2.269e111e.png",
    "revision": "269e111effc46cb5dd73135670394834"
  },
  {
    "url": "assets/img/PPjwP.118d84b4.png",
    "revision": "118d84b4bc7e732e5592961c122c25da"
  },
  {
    "url": "assets/img/ProcessRelated.a1d8e2a1.png",
    "revision": "a1d8e2a1982774ca8f6c4ef4f80a3c97"
  },
  {
    "url": "assets/img/ProcessState.36bc1559.png",
    "revision": "36bc1559611b05e9549101ed5fd512ab"
  },
  {
    "url": "assets/img/program-link.829f7b1c.jpg",
    "revision": "829f7b1c4af131f6b5488d14884a5220"
  },
  {
    "url": "assets/img/program-works.7eaa3861.jpg",
    "revision": "7eaa38613e33e5b97de0a77c8b3007aa"
  },
  {
    "url": "assets/img/prototype1.8c492365.png",
    "revision": "8c492365707ecf63c2ed663ec7d2b26c"
  },
  {
    "url": "assets/img/pygc1.0d507109.jpg",
    "revision": "0d5071093adaa02bc03fa3dfd91aa5bc"
  },
  {
    "url": "assets/img/pygc2.d7314ead.jpg",
    "revision": "d7314ead6b303f08a91687577c045585"
  },
  {
    "url": "assets/img/pygc3.510f4d2d.jpg",
    "revision": "510f4d2d37aabdbc8978d9e47630237d"
  },
  {
    "url": "assets/img/pygc4.6fd40c05.jpg",
    "revision": "6fd40c055a6633c654acaf05f472c1b2"
  },
  {
    "url": "assets/img/reverseLink.b5068ec1.png",
    "revision": "b5068ec1a7088c2c8b60812bf95d9264"
  },
  {
    "url": "assets/img/skiplist.01da932c.png",
    "revision": "01da932c2fc6f96c4433affe516ea566"
  },
  {
    "url": "assets/img/sortcolors.2ea3ac45.png",
    "revision": "2ea3ac45dbc284022183402e3562b454"
  },
  {
    "url": "assets/img/sql-ranking.7342fcbb.jpg",
    "revision": "7342fcbb9b53fec8785d65907336131a"
  },
  {
    "url": "assets/img/steps.0a91c6d3.jpg",
    "revision": "0a91c6d34132239201585c4713382f95"
  },
  {
    "url": "assets/img/style.82ae1c6c.png",
    "revision": "82ae1c6c40206b16144c1d94106522cb"
  },
  {
    "url": "assets/img/sun.896a044e.png",
    "revision": "896a044ebadc680c899613f7ce3d4057"
  },
  {
    "url": "assets/img/tGPV0.4cf15f1e.png",
    "revision": "4cf15f1ee5f507f7a4beda2b8703d7ff"
  },
  {
    "url": "assets/img/transform.5e4c54c0.jpg",
    "revision": "5e4c54c024387f4c6517dc20600591fc"
  },
  {
    "url": "assets/img/uglynum.ab587460.png",
    "revision": "ab5874600f058b00adb89332e2cdf9e6"
  },
  {
    "url": "assets/img/view-model.0c8d5132.png",
    "revision": "0c8d513270ba7f1be355b8a8f18a6865"
  },
  {
    "url": "assets/img/vue-array-bind.5dbf0e84.jpg",
    "revision": "5dbf0e84abaa4a79fa2f05dafa61bd27"
  },
  {
    "url": "assets/img/vue-binding.5de7af21.png",
    "revision": "5de7af21d4c2de951720c006f84b98fc"
  },
  {
    "url": "assets/img/vue-computed.e7e4816e.jpg",
    "revision": "e7e4816e8f87d60d8fe5ab56cc48f109"
  },
  {
    "url": "assets/img/vue-data-bind.1ff4e0c7.jpg",
    "revision": "1ff4e0c7fc11396a483bc2a59fb447bb"
  },
  {
    "url": "assets/img/vue-lifecycle.564f2064.png",
    "revision": "564f2064aa6e63ee05ec67aba85d663b"
  },
  {
    "url": "assets/img/vue-make-path.3aefef41.jpg",
    "revision": "3aefef4173ad5dbf66936773e17c712f"
  },
  {
    "url": "assets/js/1.3d0eccea.js",
    "revision": "fd228adfa5906b54871236f3c73288fe"
  },
  {
    "url": "assets/js/10.b66871fb.js",
    "revision": "22d806fc99869b7fb10604c13bf245fd"
  },
  {
    "url": "assets/js/100.4fe08f50.js",
    "revision": "70ba0682db165e98e60e0a679f82c9b4"
  },
  {
    "url": "assets/js/101.2698f379.js",
    "revision": "ac2136b9313dc7ca5ed535cbffceb293"
  },
  {
    "url": "assets/js/102.856ecad7.js",
    "revision": "d2845a925b3f0169e83e4df80e2612d3"
  },
  {
    "url": "assets/js/103.7f79a793.js",
    "revision": "a00c2ba9c0fdad6e2a6cc7ee5a99e052"
  },
  {
    "url": "assets/js/104.e4f8e897.js",
    "revision": "82b4ecd2952af70a8173bf99f10afcbb"
  },
  {
    "url": "assets/js/105.428d723b.js",
    "revision": "8e2d1f835ba8c2a15655e1863c30c3a5"
  },
  {
    "url": "assets/js/106.ca91922e.js",
    "revision": "3a6c067b2fb14ea38f5f69d6fc9b423f"
  },
  {
    "url": "assets/js/107.30d8bbbb.js",
    "revision": "cc22b8063d061dea53b3598beee988c9"
  },
  {
    "url": "assets/js/108.c632ab25.js",
    "revision": "91ccf4a45a1e761a522f690a9d12208f"
  },
  {
    "url": "assets/js/109.32532de0.js",
    "revision": "6c449562d5fb8e5b1475f3c34f868ab3"
  },
  {
    "url": "assets/js/11.0ba1c934.js",
    "revision": "6d5964f42357fc0fe93a433bb7c91e9f"
  },
  {
    "url": "assets/js/110.2740a836.js",
    "revision": "f978412385a4073fb2870cb0922e0342"
  },
  {
    "url": "assets/js/111.d0c452ed.js",
    "revision": "3516182bdd9003fdb1217047d4a0e561"
  },
  {
    "url": "assets/js/112.fc9af8d1.js",
    "revision": "0a2d89801955911bb7ae377869ab00c8"
  },
  {
    "url": "assets/js/113.c465921f.js",
    "revision": "75289403723abbaf2d58f4cfe164208c"
  },
  {
    "url": "assets/js/114.2e24ea9b.js",
    "revision": "0456cce330b294853f9a86b30594f557"
  },
  {
    "url": "assets/js/115.40c2901a.js",
    "revision": "ca4281d4cb6bf8074fb38c203dc5a92b"
  },
  {
    "url": "assets/js/116.14c8be33.js",
    "revision": "2006d370835dc606f51acc100657610a"
  },
  {
    "url": "assets/js/117.9ab170ab.js",
    "revision": "6793b2c96927cf148ca78533f7c8bde5"
  },
  {
    "url": "assets/js/118.6e0751a1.js",
    "revision": "40d1fd650b25306d745f848ec0fcd29d"
  },
  {
    "url": "assets/js/119.fc216ba8.js",
    "revision": "57cf150f537c75a7f748b6d17923987e"
  },
  {
    "url": "assets/js/12.2be0be89.js",
    "revision": "568bb896280bd87c10b07f4d4bab23f1"
  },
  {
    "url": "assets/js/120.f70dfe10.js",
    "revision": "987bc1e05b13fdd6b1b88c7b5a004bac"
  },
  {
    "url": "assets/js/121.45eb1aee.js",
    "revision": "89197b8a47a1d5dcbf3f13fa62533600"
  },
  {
    "url": "assets/js/122.e28c1154.js",
    "revision": "da7d2961382bf2b4e6e76d7b2e99b553"
  },
  {
    "url": "assets/js/123.b2d9672f.js",
    "revision": "03d7ea8e38b1e0b7c3b6a86029a357ed"
  },
  {
    "url": "assets/js/124.432326cb.js",
    "revision": "62903ed11af5e1d4555b054d8c3cfda8"
  },
  {
    "url": "assets/js/125.59e36aac.js",
    "revision": "23b99b92aaef964c1bde6098ca455bad"
  },
  {
    "url": "assets/js/126.088e9266.js",
    "revision": "7a276d390d196820f7fc905c100f3ef4"
  },
  {
    "url": "assets/js/127.01ea0ebd.js",
    "revision": "eddc6f8733da7dc68ca6bba6d23eb00d"
  },
  {
    "url": "assets/js/128.feeab6ae.js",
    "revision": "2e188da53510f33aba689556b749e3b0"
  },
  {
    "url": "assets/js/129.d06e308f.js",
    "revision": "cff3e7041f43e4db51a5308de1115ee8"
  },
  {
    "url": "assets/js/13.8e6a34ee.js",
    "revision": "668b79910ab33e9d2e66f647374164f8"
  },
  {
    "url": "assets/js/130.275a88e0.js",
    "revision": "bf25d2d278cbe86d447bb46764f1d933"
  },
  {
    "url": "assets/js/131.c3f8049b.js",
    "revision": "b981b5902588082d5ff2c330a5760752"
  },
  {
    "url": "assets/js/132.ca115fb9.js",
    "revision": "8b91b43f93089a0c0ba87c301798d2b6"
  },
  {
    "url": "assets/js/133.9777acfa.js",
    "revision": "0ffbd83f429f21d8627aa045a3f5aa94"
  },
  {
    "url": "assets/js/134.25b78db4.js",
    "revision": "198ec3f7209346cb56d8b88e4cd0b850"
  },
  {
    "url": "assets/js/135.51c7e195.js",
    "revision": "5dc8608ef6e8145d69844736f9c4434d"
  },
  {
    "url": "assets/js/136.27c32181.js",
    "revision": "bf5a5c7417691a5d4dc6186e556ba91e"
  },
  {
    "url": "assets/js/137.ee6815bd.js",
    "revision": "34f4a4a6066c2b167148268bde4f94f2"
  },
  {
    "url": "assets/js/138.7d4c4efa.js",
    "revision": "08101708b93f15df175c4db7df2b92b8"
  },
  {
    "url": "assets/js/139.1694415c.js",
    "revision": "a444a669ace78b436bf5af095687554f"
  },
  {
    "url": "assets/js/14.546b9464.js",
    "revision": "05e237f3be873593a04fc82b0f165337"
  },
  {
    "url": "assets/js/140.e7974dfc.js",
    "revision": "57d3ad24769103aa5a4e3e9bb261ca8d"
  },
  {
    "url": "assets/js/141.ee2ca30b.js",
    "revision": "fcff5d452507044a45c11eeabb985f47"
  },
  {
    "url": "assets/js/142.9baa7ddc.js",
    "revision": "2f376e368cea8de1db1d545d8ca2c9e4"
  },
  {
    "url": "assets/js/143.f5eb2e16.js",
    "revision": "0ee14f2f046ca8f2758285262ac5cea7"
  },
  {
    "url": "assets/js/144.613798dd.js",
    "revision": "062e1ce31adfc0213544f6ec9c410e8a"
  },
  {
    "url": "assets/js/145.c20ef895.js",
    "revision": "d7e9cc287003e54937d9adc0665e397b"
  },
  {
    "url": "assets/js/146.0789d788.js",
    "revision": "d96d1d650842d9928bdcd4863900bd25"
  },
  {
    "url": "assets/js/147.463a8b46.js",
    "revision": "cd1b5d50fe677bd907f5f67ba4d77dbe"
  },
  {
    "url": "assets/js/148.055ab863.js",
    "revision": "e5f5ef418f6620bf787cd3b4de2b7281"
  },
  {
    "url": "assets/js/149.9c126ee7.js",
    "revision": "6c636dc62a6b398f1a3f877a7e17dd50"
  },
  {
    "url": "assets/js/15.d4971338.js",
    "revision": "e88b0d8edc1632839143b7c40dde71e5"
  },
  {
    "url": "assets/js/150.fa001ae1.js",
    "revision": "912c9e60afc3985b2870ea8593c3231e"
  },
  {
    "url": "assets/js/151.adae13c5.js",
    "revision": "3c546be2bda77b871bbf41dea5fb16ac"
  },
  {
    "url": "assets/js/152.39077a5f.js",
    "revision": "6640884d9028f7adcf5a69cbf80156a3"
  },
  {
    "url": "assets/js/153.2cd8f2bd.js",
    "revision": "dca01f2e958f673243139ad74d0b6411"
  },
  {
    "url": "assets/js/154.49082e32.js",
    "revision": "70d9b474c039ceaef2bd38610b92eb4d"
  },
  {
    "url": "assets/js/155.98557f9a.js",
    "revision": "81b281e1114ede3a5a0e3205d76767fd"
  },
  {
    "url": "assets/js/156.3b296fa5.js",
    "revision": "9d12c61f8179a887ec15563be84e2165"
  },
  {
    "url": "assets/js/157.5a905e82.js",
    "revision": "e24c3e96232b07b15392e0516969d855"
  },
  {
    "url": "assets/js/158.078abd0f.js",
    "revision": "f0ad709c5559e5940e81dbb50bc545b4"
  },
  {
    "url": "assets/js/159.54dce4c8.js",
    "revision": "99c3a2d650ca1fb12baf4ec9dc59c815"
  },
  {
    "url": "assets/js/16.56cd6643.js",
    "revision": "c8e6931e1e1f2a04fad680889a7ac7ed"
  },
  {
    "url": "assets/js/160.c7cb04d1.js",
    "revision": "b7fead15fc47e72b7f5eda9687ca7569"
  },
  {
    "url": "assets/js/161.8cca2a73.js",
    "revision": "b224cbfc9ca43cb21f6ff880462ea71e"
  },
  {
    "url": "assets/js/162.72700b1b.js",
    "revision": "078ea89c57d85af9e0a9466b3b16c8ac"
  },
  {
    "url": "assets/js/163.54fb8eb5.js",
    "revision": "f97cc12b7eeae9b7075ac7fae71c3f01"
  },
  {
    "url": "assets/js/164.be1dba22.js",
    "revision": "d4dbe24b2e3fad4e87a9bfa8c9d106a1"
  },
  {
    "url": "assets/js/165.c3078510.js",
    "revision": "5c29da1903defc54b1b3a6a4c9f5c405"
  },
  {
    "url": "assets/js/166.c7ff36a2.js",
    "revision": "763322cb2a1c6c1f1991382416b70c52"
  },
  {
    "url": "assets/js/167.0694d9f4.js",
    "revision": "d80f82d426fd031f72fddd0057ff5030"
  },
  {
    "url": "assets/js/168.d6e89cd8.js",
    "revision": "46ec620282037aae70716e9dd9ccb000"
  },
  {
    "url": "assets/js/169.709d1da5.js",
    "revision": "c207d79b53a5fb281acaad4ce8e659dc"
  },
  {
    "url": "assets/js/17.d5c9e816.js",
    "revision": "e99ce5add345480ab4101bd697503286"
  },
  {
    "url": "assets/js/170.a5d701e5.js",
    "revision": "7ac6ee4aa0660d499d39331e4caa983b"
  },
  {
    "url": "assets/js/171.35316698.js",
    "revision": "620bfc09291aeff650a4c5f6241cec4e"
  },
  {
    "url": "assets/js/172.01e85784.js",
    "revision": "9c8fbfbd7725b4cc68329517c5ca8412"
  },
  {
    "url": "assets/js/173.36d8b363.js",
    "revision": "44ea7834079bcdcf9edbd261032d0d47"
  },
  {
    "url": "assets/js/174.a8030763.js",
    "revision": "12584f2dd578dc03d31604b1089a8f42"
  },
  {
    "url": "assets/js/175.4c99d98d.js",
    "revision": "ba3f65199ac01108331825e89c833591"
  },
  {
    "url": "assets/js/176.0054ae14.js",
    "revision": "effaaf56427edf495c2b648c7eb42d91"
  },
  {
    "url": "assets/js/177.1646116e.js",
    "revision": "f87ee6473c190c7f3ec350835c966971"
  },
  {
    "url": "assets/js/178.cda4afa3.js",
    "revision": "59d95bb08da462e557bb0eb21510bea2"
  },
  {
    "url": "assets/js/179.4d871497.js",
    "revision": "da86f67b029928cd79d1b77b954c3d67"
  },
  {
    "url": "assets/js/18.1d9553ed.js",
    "revision": "bb00f62cd2eec28f9253175f9d72f1ee"
  },
  {
    "url": "assets/js/180.80236a79.js",
    "revision": "b7673d819c722550f669eeb552d9b6c8"
  },
  {
    "url": "assets/js/181.147a84e0.js",
    "revision": "6d0cee975fc4ebde16e64f482aea3ced"
  },
  {
    "url": "assets/js/182.6a7b308f.js",
    "revision": "d0184f0d7e519dae057d8992a78eaac5"
  },
  {
    "url": "assets/js/183.edb4efcb.js",
    "revision": "f11436e5dcbac1de0696e5f97d1dcfd8"
  },
  {
    "url": "assets/js/184.b5b4f47b.js",
    "revision": "9e144ee0244b3b3dc2e102fdd1ab91d1"
  },
  {
    "url": "assets/js/185.7663067d.js",
    "revision": "50b8c50f749dba7e6e94fdaf3a415bbb"
  },
  {
    "url": "assets/js/186.479744ff.js",
    "revision": "d812c5fb8869aa2df44cde4ba964170e"
  },
  {
    "url": "assets/js/187.fe012386.js",
    "revision": "44b2ef678e78a3526ccdf8995910f16d"
  },
  {
    "url": "assets/js/188.7d15c64e.js",
    "revision": "19bfde996dde032b3737071b9bfe5cc0"
  },
  {
    "url": "assets/js/189.918ac46c.js",
    "revision": "65d6cfe5708fcaf19c7a68579c18546c"
  },
  {
    "url": "assets/js/19.6cce352d.js",
    "revision": "9aa5234f50eadc0997205aea7691b37c"
  },
  {
    "url": "assets/js/190.46806c76.js",
    "revision": "b6e3e100d35e338b59ef7238760a7afd"
  },
  {
    "url": "assets/js/191.f51e8102.js",
    "revision": "22ccc5c6b7f603272d1cc44d96645408"
  },
  {
    "url": "assets/js/192.96980137.js",
    "revision": "adb1bbfd385efafc8a82034d7d1ecb93"
  },
  {
    "url": "assets/js/193.f9075f04.js",
    "revision": "1fa9cd35e52ca4710e3f96c1e9cef579"
  },
  {
    "url": "assets/js/194.d1a317c5.js",
    "revision": "98eeb176dedc38b7ff66a233432ab66e"
  },
  {
    "url": "assets/js/195.93d7bcb8.js",
    "revision": "8f123c013f5c5af13069f891debc7eff"
  },
  {
    "url": "assets/js/196.d1b80342.js",
    "revision": "9f5b7f6ed3e3f341f9d14c5af2a76b04"
  },
  {
    "url": "assets/js/197.3afd3dc8.js",
    "revision": "df31ce0f16878512840661f2cfe93a75"
  },
  {
    "url": "assets/js/198.0242ad93.js",
    "revision": "8b41908eaeb5ed1681f0fef1b8b6d7f5"
  },
  {
    "url": "assets/js/199.402e2b9b.js",
    "revision": "bc5539c09ab8a6685983d88577d67215"
  },
  {
    "url": "assets/js/20.5fbb3963.js",
    "revision": "e385ae2b816d4afaab301275288c7ad1"
  },
  {
    "url": "assets/js/200.43d1b200.js",
    "revision": "6c42be66f9ee3980b5ca8478d4560937"
  },
  {
    "url": "assets/js/201.64959961.js",
    "revision": "deb454fdac925448e52a32939010daa5"
  },
  {
    "url": "assets/js/202.a97b3969.js",
    "revision": "2611b29ed91acd35973ee5b9bb1400df"
  },
  {
    "url": "assets/js/203.0c90db1c.js",
    "revision": "729db1f1a09e77f010b1d427623d7b78"
  },
  {
    "url": "assets/js/204.a7f95541.js",
    "revision": "212db7c8d23b6f5d92d9b65c96ef5bca"
  },
  {
    "url": "assets/js/205.368e9b78.js",
    "revision": "57244d1a5d73986b4722c27be6c8ca72"
  },
  {
    "url": "assets/js/206.3c93c30c.js",
    "revision": "c64f24556cd60acd7523b9a5fa3de93b"
  },
  {
    "url": "assets/js/207.13eb9679.js",
    "revision": "b324e9c48fa7852486685d3b31b2dca4"
  },
  {
    "url": "assets/js/208.03d299b9.js",
    "revision": "0d67f026703d824818482d87e142d76d"
  },
  {
    "url": "assets/js/209.9486842a.js",
    "revision": "aed9822bba829016c1a1a46b06b57480"
  },
  {
    "url": "assets/js/21.e23a3118.js",
    "revision": "bf5f31bb027486b3b5f4b81a027d43fa"
  },
  {
    "url": "assets/js/210.720b01aa.js",
    "revision": "e59afc3ea05525b17aaf2223dbc7520a"
  },
  {
    "url": "assets/js/211.14d1a5a6.js",
    "revision": "8a9c1c14604f79edbb3ecdf0283c0956"
  },
  {
    "url": "assets/js/212.b9e7465b.js",
    "revision": "b6a4f674cb51d3f95dd54f7652403428"
  },
  {
    "url": "assets/js/213.64969d71.js",
    "revision": "93b5c4de0765dfe27a22cb7c46886ab5"
  },
  {
    "url": "assets/js/214.bf35a0d3.js",
    "revision": "4a2bafb9cc9d7e82741ed41c66944d35"
  },
  {
    "url": "assets/js/215.7d3217b0.js",
    "revision": "833a767de436ef6c266b148b8099c8ae"
  },
  {
    "url": "assets/js/216.913a3fac.js",
    "revision": "167a60f44285eadf6208b14db2f9b006"
  },
  {
    "url": "assets/js/217.52c43eca.js",
    "revision": "bcf12ff8f0930f5b738af841ae16cc5f"
  },
  {
    "url": "assets/js/218.2e14fae9.js",
    "revision": "268fc677402d3a2d8baa89e704f7cb2d"
  },
  {
    "url": "assets/js/219.9f5b1cd5.js",
    "revision": "66e855ce35780c2b3d7f8206ab7728c6"
  },
  {
    "url": "assets/js/22.118803fa.js",
    "revision": "75ea2e342b2486639863d38ec7beb84f"
  },
  {
    "url": "assets/js/220.a0429c37.js",
    "revision": "a2bc97471caf3da0efa866e10de93e78"
  },
  {
    "url": "assets/js/221.092f9cce.js",
    "revision": "32aae641308309f56b4c3b89f23b2fea"
  },
  {
    "url": "assets/js/222.9d0ebb16.js",
    "revision": "f30bb4f83874df120e23f8f0be80d470"
  },
  {
    "url": "assets/js/223.9d68f223.js",
    "revision": "103de3a7f6c0bdaec5afa825e068e933"
  },
  {
    "url": "assets/js/224.bd46f416.js",
    "revision": "982a5ba43bd362d6515d68a1515de12c"
  },
  {
    "url": "assets/js/225.d9a0b132.js",
    "revision": "7946b57fae29cd790c49d754e8195ef8"
  },
  {
    "url": "assets/js/226.131caf4c.js",
    "revision": "ada961e64996cdbd7bdaaa2f4dd92b24"
  },
  {
    "url": "assets/js/227.85599d87.js",
    "revision": "b1a3215026209df73d2d52bc80aee5dc"
  },
  {
    "url": "assets/js/228.7e7b83cd.js",
    "revision": "8c927d5af02b53889418ee41c679c4f9"
  },
  {
    "url": "assets/js/229.2cf9c633.js",
    "revision": "1e6eaabd8af47f8af948584849bc13e9"
  },
  {
    "url": "assets/js/23.0b0fa16a.js",
    "revision": "c9d2684a9d2a662af2f4a6ea1e5b348d"
  },
  {
    "url": "assets/js/230.c91b6358.js",
    "revision": "8262943b5ca7888690cf4cff5b5f7af2"
  },
  {
    "url": "assets/js/24.6776f04e.js",
    "revision": "303b4c4e5a0d9ebf51fb8df39335dbe5"
  },
  {
    "url": "assets/js/25.b7314fda.js",
    "revision": "b4e4da11cea2075d94c89e991e1cd267"
  },
  {
    "url": "assets/js/26.53c27b50.js",
    "revision": "f7605a01e19586303b7e69265e3d0b70"
  },
  {
    "url": "assets/js/27.f846a532.js",
    "revision": "f050abf88d4e682055e4a6b01c91b960"
  },
  {
    "url": "assets/js/28.83444edd.js",
    "revision": "783e618fe2a73ad236ebb9981eca5a52"
  },
  {
    "url": "assets/js/29.d774d89c.js",
    "revision": "66bc0b1033a7ad45d5a2bc5fba5b3037"
  },
  {
    "url": "assets/js/3.b48a9ff1.js",
    "revision": "9c6221788d2fca6a7ec4279cb91bbced"
  },
  {
    "url": "assets/js/30.afdf11aa.js",
    "revision": "283219dfa641c9521101aba1d343c191"
  },
  {
    "url": "assets/js/31.aea3a10b.js",
    "revision": "2f170701f275b316d3da41ef82a96a65"
  },
  {
    "url": "assets/js/32.73f461cf.js",
    "revision": "830b11997de2705654272cd17d8c0dbb"
  },
  {
    "url": "assets/js/33.7a938fe2.js",
    "revision": "eefcceedde03a1fae304e47b0dc2a8aa"
  },
  {
    "url": "assets/js/34.6651215c.js",
    "revision": "4b9e6d61fe4bf5e52ee319c0f6ee2456"
  },
  {
    "url": "assets/js/35.4fe32096.js",
    "revision": "9f5b120c175aaf0ac25fda8d713aa9fd"
  },
  {
    "url": "assets/js/36.474c557d.js",
    "revision": "cf9285b3e3d087927703e38f262f1462"
  },
  {
    "url": "assets/js/37.bec83937.js",
    "revision": "2161bbeaabe606ad109fac0cdd783188"
  },
  {
    "url": "assets/js/38.cf2570dc.js",
    "revision": "70d5bf238113e037c38e3841e93d9ef5"
  },
  {
    "url": "assets/js/39.1a8b4445.js",
    "revision": "cd241a81421a5f0f8fb1e5d70b814a89"
  },
  {
    "url": "assets/js/4.c5a2c790.js",
    "revision": "cc5950c51a4cda5b5c0b561f581cc2ca"
  },
  {
    "url": "assets/js/40.c79f63d1.js",
    "revision": "fd7dbd1afb7ec2a6eb050cc2e64891fb"
  },
  {
    "url": "assets/js/41.59033d6e.js",
    "revision": "4ddb2dc4020f5dada753842fdf2fb738"
  },
  {
    "url": "assets/js/42.dec51831.js",
    "revision": "87ed9031ab7441948c3bee3e152cdda2"
  },
  {
    "url": "assets/js/43.56891ede.js",
    "revision": "cee61dd10143d41d3a5f5efd0f8a9288"
  },
  {
    "url": "assets/js/44.d1ff7606.js",
    "revision": "279a07e0b8acb2faf4980f80bae26751"
  },
  {
    "url": "assets/js/45.9e63a209.js",
    "revision": "b86e6f4986b3bc9d2c38fb6274405f99"
  },
  {
    "url": "assets/js/46.d552749e.js",
    "revision": "83e68705fd9f7619c57adf6be9721b4f"
  },
  {
    "url": "assets/js/47.70742690.js",
    "revision": "36f11507d024088fede35c753570cbee"
  },
  {
    "url": "assets/js/48.beb4f3d7.js",
    "revision": "4ab605fb1e45d8c35f415fb29ecd983d"
  },
  {
    "url": "assets/js/49.14b57014.js",
    "revision": "b2a27a9bf727e53eeab03062d70a19f9"
  },
  {
    "url": "assets/js/5.0f4c3b88.js",
    "revision": "1f4c313cb779226f3dc27751a7ddd3db"
  },
  {
    "url": "assets/js/50.94b3eeeb.js",
    "revision": "17d9f5351b609ebfd5e04e3e3799625d"
  },
  {
    "url": "assets/js/51.546446e4.js",
    "revision": "21899be0b7b3751f881bb0a0d09e4a8e"
  },
  {
    "url": "assets/js/52.69006a95.js",
    "revision": "241e1114fd8f492819f413d957c85c1b"
  },
  {
    "url": "assets/js/53.d930b7a3.js",
    "revision": "6cad215197681e323151d0e524d2690e"
  },
  {
    "url": "assets/js/54.c1309729.js",
    "revision": "0f7593fe106e2dc8112fac0f95ebbfbf"
  },
  {
    "url": "assets/js/55.75dfce5f.js",
    "revision": "3c5ed90c978d6d3bbdeaedae9210562f"
  },
  {
    "url": "assets/js/56.8c2c5b66.js",
    "revision": "40e07c2946462f7c55ed5f33b6d47ab3"
  },
  {
    "url": "assets/js/57.45e987f6.js",
    "revision": "16d238ec3fc099030ca1578cf0b9ae66"
  },
  {
    "url": "assets/js/58.b8f825d5.js",
    "revision": "5dc7e5b212d59922e3534682ad4fee47"
  },
  {
    "url": "assets/js/59.f7d69d88.js",
    "revision": "acf9d9d94e459b4b57f949f3553cb200"
  },
  {
    "url": "assets/js/6.09b6e7eb.js",
    "revision": "f360ace1dcc54d12c612f254760a5ce7"
  },
  {
    "url": "assets/js/60.45bfcf08.js",
    "revision": "4f78fa2354f370c35b62ce2cec0f2340"
  },
  {
    "url": "assets/js/61.fade25e0.js",
    "revision": "055a6769e2009a25d0d920d0b8c915f0"
  },
  {
    "url": "assets/js/62.7f78f3ea.js",
    "revision": "471b607baaa201dc810c2cebd995ffcb"
  },
  {
    "url": "assets/js/63.b7c31fca.js",
    "revision": "2ddfc5ed18252d60435602ff06cc39cd"
  },
  {
    "url": "assets/js/64.7b7581d3.js",
    "revision": "97e46d18cd4936c68340466eaf672ad4"
  },
  {
    "url": "assets/js/65.524ba1ad.js",
    "revision": "8841dcb81c3ce0e8b44cd94c5d4cfac2"
  },
  {
    "url": "assets/js/66.7695ad02.js",
    "revision": "e5ecf35e0b4a5c9ffcbc98dd22751e76"
  },
  {
    "url": "assets/js/67.7d6d0cee.js",
    "revision": "c739ab1c3bd44ad5ab60574ea9b43cce"
  },
  {
    "url": "assets/js/68.d23064b1.js",
    "revision": "5595f8e83bc069e5710e64807f04600e"
  },
  {
    "url": "assets/js/69.8ae30547.js",
    "revision": "d6be733415a8ce49bf26253e265547cb"
  },
  {
    "url": "assets/js/7.b5577448.js",
    "revision": "c118da27be9563fd88d026e6058f9c64"
  },
  {
    "url": "assets/js/70.f6176f5b.js",
    "revision": "96887c2d6a660ac370d200a8b5bebf3e"
  },
  {
    "url": "assets/js/71.8fea528c.js",
    "revision": "514bc1aa815cc09fd193b211574b8da5"
  },
  {
    "url": "assets/js/72.533310e0.js",
    "revision": "96f75fe3925d7a505a856b7cbd1cb8fc"
  },
  {
    "url": "assets/js/73.afba1588.js",
    "revision": "657ae343495ffb24e60506422590162e"
  },
  {
    "url": "assets/js/74.69717e23.js",
    "revision": "730b1fa79a934ce89842fe092f8114fa"
  },
  {
    "url": "assets/js/75.3b232afc.js",
    "revision": "e1d7e3c391249ab6176723084703da92"
  },
  {
    "url": "assets/js/76.36f29743.js",
    "revision": "a532d5ba42ccb0f3fc95a404aa0ef9cb"
  },
  {
    "url": "assets/js/77.c5ad4a08.js",
    "revision": "aadb63f7d274b5933c6713d34bd3dc42"
  },
  {
    "url": "assets/js/78.228ba8f9.js",
    "revision": "7a846eeac6524e2157f1ce6d13e7333e"
  },
  {
    "url": "assets/js/79.d59fc46e.js",
    "revision": "9c7a2a83ea5b311bd69188248cdad421"
  },
  {
    "url": "assets/js/8.fafa8517.js",
    "revision": "cb9d58547ea06469ba5afbf4de769302"
  },
  {
    "url": "assets/js/80.7f5b5b10.js",
    "revision": "9d3aba22f86aee8cd5412eed19200f60"
  },
  {
    "url": "assets/js/81.03d43396.js",
    "revision": "edc75b5c8c57295eea748eee59000891"
  },
  {
    "url": "assets/js/82.a6769321.js",
    "revision": "28e1062e7e40c04e7efca23d75bf9bef"
  },
  {
    "url": "assets/js/83.85b7dbfc.js",
    "revision": "faa4b50944256c17e8cb969981093600"
  },
  {
    "url": "assets/js/84.1a22e5aa.js",
    "revision": "1a0430eda01713d8f9c8b2b9a7613d81"
  },
  {
    "url": "assets/js/85.0c6c4986.js",
    "revision": "5d14a3eb0b3e32b46002a3c3b0b1b7bb"
  },
  {
    "url": "assets/js/86.a7d7b7fe.js",
    "revision": "34bb27b07a57553b44122be770c71a2f"
  },
  {
    "url": "assets/js/87.4bab21b0.js",
    "revision": "a148490214c4893f27a47c53f2995229"
  },
  {
    "url": "assets/js/88.3b789dde.js",
    "revision": "92b46ed3ccdd1cfa1f2c71e856a31d22"
  },
  {
    "url": "assets/js/89.3876ce83.js",
    "revision": "47ed567f35cc9d4e1bd92cb2b55a2ac2"
  },
  {
    "url": "assets/js/9.b34e2c84.js",
    "revision": "397dcf1f90b9932a3accc219d4d3c05f"
  },
  {
    "url": "assets/js/90.f5c2ae1a.js",
    "revision": "f8fbdd9e5a284345602854a39e87bbf1"
  },
  {
    "url": "assets/js/91.de26cd91.js",
    "revision": "6c83e441ffaca6c50439ba71ca145b1a"
  },
  {
    "url": "assets/js/92.82d03f89.js",
    "revision": "27e33e4686087a42741151aeada8dabd"
  },
  {
    "url": "assets/js/93.382979b0.js",
    "revision": "a299f16928c8456ce4e4ae1ce75c6d86"
  },
  {
    "url": "assets/js/94.521dfbe5.js",
    "revision": "be30e27cb8c0b5d17336805fa1dbeff0"
  },
  {
    "url": "assets/js/95.2e92acac.js",
    "revision": "ef253164362ab14578ee833ee5b57431"
  },
  {
    "url": "assets/js/96.b5670a21.js",
    "revision": "e5ec9089b58b0b2d33abb8448646ea96"
  },
  {
    "url": "assets/js/97.78ccb4ff.js",
    "revision": "7e72b98b5f2e2625f99792c8d1fb89a3"
  },
  {
    "url": "assets/js/98.d3da68eb.js",
    "revision": "5048a61da47af2c838cb36e9faaf9616"
  },
  {
    "url": "assets/js/99.83e88e8c.js",
    "revision": "a9020f25680c59892b8f62b199a1f1d4"
  },
  {
    "url": "assets/js/app.1671065f.js",
    "revision": "b12e0cfaeee8d1fcc106fedb327dd86e"
  },
  {
    "url": "categories/index.html",
    "revision": "1d006596c28e070b5416805baff5319b"
  },
  {
    "url": "compile/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "compile/link.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "cpp/class.html",
    "revision": "c6fc7322359ce163aac70694a6a32626"
  },
  {
    "url": "cpp/function.html",
    "revision": "03d3cbfe51f6090f26adac88908eadf0"
  },
  {
    "url": "cpp/index.html",
    "revision": "caa9640404d28d2b10d48bd353eb830a"
  },
  {
    "url": "cpp/IO.html",
    "revision": "68673007b5f709529faf2a0bd87fe1ef"
  },
  {
    "url": "cpp/sentence.html",
    "revision": "b8dc6177162c30cdd853694d73f88446"
  },
  {
    "url": "cpp/var-len-sequence.html",
    "revision": "32fda3455fcd27cc5a3fe438b1a848f6"
  },
  {
    "url": "cpp/var-types.html",
    "revision": "7b89efcd10f974408a9204590a5bae12"
  },
  {
    "url": "database/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "database/leetcode-database.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "database/MySQL.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "database/principle.html",
    "revision": "ae11c426b0fe204895ffac723b64bb7d"
  },
  {
    "url": "database/Redis.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "database/SQL.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "design/abserver.html",
    "revision": "39cbbc4b6f21f3185d7e48f935e32513"
  },
  {
    "url": "design/abstract-factory.html",
    "revision": "254d8ece42eba4d9b0de5bdd5e55ae46"
  },
  {
    "url": "design/adapter.html",
    "revision": "f6bf640ee17d87d876f5448810db27b0"
  },
  {
    "url": "design/agent.html",
    "revision": "dd01fb22dc9d9cc1417b5cf5ff3d82e9"
  },
  {
    "url": "design/appearance.html",
    "revision": "639be2a8afce6dad8cf4db7ffbf5561f"
  },
  {
    "url": "design/bridging.html",
    "revision": "0e4ee553942be08def0f6b34f659edb0"
  },
  {
    "url": "design/combination.html",
    "revision": "b863d89a49f9de54836943e7e5d572c7"
  },
  {
    "url": "design/command.html",
    "revision": "4f220ed1fcba1808a4c3f5fd38af2621"
  },
  {
    "url": "design/decoration.html",
    "revision": "3a9f8d3656c4198bc0fd4771d9e11a48"
  },
  {
    "url": "design/design-pattern.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "design/duty-chain.html",
    "revision": "70fb9bd9f092c2ae700dbb5bd6956ccc"
  },
  {
    "url": "design/factory-method.html",
    "revision": "ec841b982e68af1a59a6093bdb4b24de"
  },
  {
    "url": "design/flyweight.html",
    "revision": "eeb14f193d19efe04210f0e5d1b7bdd0"
  },
  {
    "url": "design/generator.html",
    "revision": "2bb4d95a3fcba6f29750938fbed351fa"
  },
  {
    "url": "design/index.html",
    "revision": "a39608fac20ade62594340bd1433ede8"
  },
  {
    "url": "design/interpreter.html",
    "revision": "c074be5d1c134d7f68b10115b4853c57"
  },
  {
    "url": "design/iterator.html",
    "revision": "c433cf38c28bb168ba3e48b8b2632867"
  },
  {
    "url": "design/mediator.html",
    "revision": "0a7a72ab455f35ab8846604b7b42e28a"
  },
  {
    "url": "design/memo.html",
    "revision": "14f453b452c1b151310d238fae1a5c34"
  },
  {
    "url": "design/null-object.html",
    "revision": "2cb2bb0d1541b9e35deb4d20df4987c1"
  },
  {
    "url": "design/oriente-object.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "design/prototype.html",
    "revision": "95e07c536d7e853382cecf84e9bc7be6"
  },
  {
    "url": "design/simple-factory.html",
    "revision": "ec7345336e1f52461abddd77331b89cd"
  },
  {
    "url": "design/singleton.html",
    "revision": "6b7d437b98237d6cd4fcfdd67106e8db"
  },
  {
    "url": "design/state.html",
    "revision": "82e0479a4b5c645cf388125dac666d04"
  },
  {
    "url": "design/strategy.html",
    "revision": "e992a559710ea1beafb820fb5b19e7dc"
  },
  {
    "url": "design/temp-method.html",
    "revision": "32732fc8cbbdfa60cfb354751a14745e"
  },
  {
    "url": "design/visitor.html",
    "revision": "8a1f01d562acb34939029b2272dd4000"
  },
  {
    "url": "framework/front-end.html",
    "revision": "cae302b138ae201e23c02766a8ce6664"
  },
  {
    "url": "framework/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "framework/vue-a.html",
    "revision": "2097e6961f30cde263681eae19af3fb4"
  },
  {
    "url": "framework/vue-b.html",
    "revision": "99cc1b928c64f792afde918026e197f5"
  },
  {
    "url": "framework/vue-c.html",
    "revision": "76142761c5fcb1c0a1456afb0a3c28ec"
  },
  {
    "url": "framework/webpack.html",
    "revision": "a2bf598363b87e2d424e5205bd9cd96b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1b4f635128a82bc4fd9a0c8141d9386e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b2f2662e652fc16c402d788b42b29efa"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "85d9f0d2c6d7c2c20a04c5ae95aa1860"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "33db48f5c6c1b732365cab69e3c155b0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a2d48fb807fd7c2a6deb2e2170ac76f3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "2350602bfb8228f4f0361e4f64321c7b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "2797b3ae848e499c5fe6b0bb9368ed89"
  },
  {
    "url": "index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "java/basic.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "java/concurrenry.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "java/container.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "java/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "java/JavaIO.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "java/virtual-marchine.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "Lang/CSS.html",
    "revision": "53746829e9124ac9f493e01e348edb64"
  },
  {
    "url": "Lang/English.html",
    "revision": "273916f4b02dcda114d9326070a3ecf7"
  },
  {
    "url": "Lang/ES6.html",
    "revision": "1e9d607f0a5b220ee4d4e19e70130e89"
  },
  {
    "url": "Lang/html.html",
    "revision": "e8abbf2b9b5231be2be3191d2b7ea1b3"
  },
  {
    "url": "Lang/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "Lang/JavaScript.html",
    "revision": "6415e00aacaf3b3d6feba344bb8ae1d4"
  },
  {
    "url": "Lang/JSTricks.html",
    "revision": "597bcf6e984b0a03877980edeed73cb8"
  },
  {
    "url": "Lang/python.html",
    "revision": "f863793ec5c32c2b5956ffddc8a605ea"
  },
  {
    "url": "Lang/regex.html",
    "revision": "8b796a9f6f1abea6a2b248eedbf93e35"
  },
  {
    "url": "Lang/use_css.html",
    "revision": "3d7cbe9026d2f0d473634be111295a6f"
  },
  {
    "url": "leetcode/array.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/bin-search.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/bit-operator.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/bound-check.html",
    "revision": "2e76b07c87a796916e8efc7d9a49a77c"
  },
  {
    "url": "leetcode/divide-conquer.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/double-pointer.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/dynamic.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/find.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/graph.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/greedy.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/hash-table.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/lcd-3.html",
    "revision": "a5c31b56309f03c24961e5e3188afad3"
  },
  {
    "url": "leetcode/list.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/math.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/ncode4.html",
    "revision": "8a38ec06d07cc924ff5b1bd9ec90d7f7"
  },
  {
    "url": "leetcode/ncode5.html",
    "revision": "263c5b03f968cd2ebb0b0b9eea492fda"
  },
  {
    "url": "leetcode/p0.html",
    "revision": "ae26476ab4e0c2020016d221d5c98e19"
  },
  {
    "url": "leetcode/p1.html",
    "revision": "a678445619cdbbfe614129612103e9c7"
  },
  {
    "url": "leetcode/p10.html",
    "revision": "9b7eba653e1206c3f6d51772c7de62c3"
  },
  {
    "url": "leetcode/p11.html",
    "revision": "3ba0cba20ce101d845d63615cf182f0e"
  },
  {
    "url": "leetcode/p12.html",
    "revision": "08d4575cfd098f01a8304de29c02b57e"
  },
  {
    "url": "leetcode/p13.html",
    "revision": "f4aba94f850149fe431290133b1c1916"
  },
  {
    "url": "leetcode/p14.html",
    "revision": "fcca7171c56aced7ff99daad2db83a2d"
  },
  {
    "url": "leetcode/p15.html",
    "revision": "859acf583a119dd9a6d81383e0355a0d"
  },
  {
    "url": "leetcode/p16.html",
    "revision": "b56c5fc4cf977ae148b52b8520b2b583"
  },
  {
    "url": "leetcode/p17.html",
    "revision": "c2d06641b4dd5ee82e2f0a8a5b596d28"
  },
  {
    "url": "leetcode/p18.html",
    "revision": "adc5758892d337cae403fe904d853f60"
  },
  {
    "url": "leetcode/p19.html",
    "revision": "9a2e36c8540858c986ae92f4fe0e0f90"
  },
  {
    "url": "leetcode/p2.html",
    "revision": "b463769634e407facb6d16df9487d799"
  },
  {
    "url": "leetcode/p20.html",
    "revision": "ba0b9868076ff18db55704fd647334fc"
  },
  {
    "url": "leetcode/p21.html",
    "revision": "341e65f423094a0273d076954314cf1f"
  },
  {
    "url": "leetcode/p22.html",
    "revision": "de18e499096cf3e737814f9a3e8ade9b"
  },
  {
    "url": "leetcode/p23.html",
    "revision": "8cb3e317a224cefd4ca119c1cbdff675"
  },
  {
    "url": "leetcode/p24.html",
    "revision": "98a4ecfad0dacaab16e95c40ec9412d5"
  },
  {
    "url": "leetcode/p25.html",
    "revision": "8dc9719fcf549d8fcf834f6e1709fc55"
  },
  {
    "url": "leetcode/p26.html",
    "revision": "6c0d950bd635ef679b18db9ef567e9e0"
  },
  {
    "url": "leetcode/p27.html",
    "revision": "ea3207342e7191a99f6e4d51bdba191d"
  },
  {
    "url": "leetcode/p28.html",
    "revision": "a979d883410313c747ea4aead4526ef1"
  },
  {
    "url": "leetcode/p29.html",
    "revision": "192b10caea3346b25dd88da6241dd631"
  },
  {
    "url": "leetcode/p3.html",
    "revision": "1edeb597fe2dd3f5841efa3926673650"
  },
  {
    "url": "leetcode/p30.html",
    "revision": "0586bf2d0678566dc6fd79d4f9103b00"
  },
  {
    "url": "leetcode/p31.html",
    "revision": "aa9293654ade41b98b6d026909a7f7c6"
  },
  {
    "url": "leetcode/p32.html",
    "revision": "3527fbc16629a2e997720fee993f508e"
  },
  {
    "url": "leetcode/p33.html",
    "revision": "8fd53b5803108292ebca97910dd9efb4"
  },
  {
    "url": "leetcode/p34.html",
    "revision": "78824e56d6736ac8708677301bad8dbb"
  },
  {
    "url": "leetcode/p35.html",
    "revision": "7f55bdcda4f4d9e0480d77df4e5fb19e"
  },
  {
    "url": "leetcode/p36.html",
    "revision": "7e6c79c7cca7fc1ecab85717c22492ab"
  },
  {
    "url": "leetcode/p37.html",
    "revision": "04c6a48745f4fd88484eb11be868b397"
  },
  {
    "url": "leetcode/p38.html",
    "revision": "c5c6655c4df7736572dce85d618cede8"
  },
  {
    "url": "leetcode/p39.html",
    "revision": "2adeec9fa97e98c467dec79175c6f9fb"
  },
  {
    "url": "leetcode/p4.html",
    "revision": "6e3bebb0b12413ee9416dc298746d994"
  },
  {
    "url": "leetcode/p40.html",
    "revision": "cc07d0078e1237ce2dbc15dfea943517"
  },
  {
    "url": "leetcode/p41.html",
    "revision": "028dc4ce7470c88ecc0edc215fa8245e"
  },
  {
    "url": "leetcode/p42.html",
    "revision": "d1c9bc3c900da8bd32633f9dd2b4ec9f"
  },
  {
    "url": "leetcode/p43.html",
    "revision": "2cc7764aa69bd7cce6cc0cd00296a98e"
  },
  {
    "url": "leetcode/p44.html",
    "revision": "ba51e51e4f9128376f0ba2ea19258751"
  },
  {
    "url": "leetcode/p45.html",
    "revision": "b50cca8c4a58a6e54404d1ea8113dc62"
  },
  {
    "url": "leetcode/p46.html",
    "revision": "cd7a084efb4de1bf80c840e811ff48e2"
  },
  {
    "url": "leetcode/p47.html",
    "revision": "3830c6ce2e86f8dc81dcb5a7bf7d2898"
  },
  {
    "url": "leetcode/p48.html",
    "revision": "01c1757f09ae301e1f41340afa8c1932"
  },
  {
    "url": "leetcode/p49.html",
    "revision": "a0544d9ce289cfa24d9655d7994421c3"
  },
  {
    "url": "leetcode/p5.html",
    "revision": "c418e5258cb59dbe4c28aacb34bc2c22"
  },
  {
    "url": "leetcode/p50.html",
    "revision": "c5da1dd0005445223e1653ecf576d4e9"
  },
  {
    "url": "leetcode/p51.html",
    "revision": "0898129ab04f47365a955ba46a2c9726"
  },
  {
    "url": "leetcode/p52.html",
    "revision": "d6a0dab935c2615b21bcd7ae06e5d70c"
  },
  {
    "url": "leetcode/p53.html",
    "revision": "3f1792ed60ce2741d1e759cea25f700f"
  },
  {
    "url": "leetcode/p54.html",
    "revision": "f77acaad7ccfd014e7a603ec57d47407"
  },
  {
    "url": "leetcode/p55.html",
    "revision": "1e62b20189085c367cbc7366ddb87fb7"
  },
  {
    "url": "leetcode/p56.html",
    "revision": "5de5cd45078d30a3b1ccd55a83b95c16"
  },
  {
    "url": "leetcode/p57.html",
    "revision": "b8eb5dbe7cd15ae59f3b575c846705bb"
  },
  {
    "url": "leetcode/p58.html",
    "revision": "79a86ade663eea514e9aba31c9921242"
  },
  {
    "url": "leetcode/p59.html",
    "revision": "a8c134897a9b3ab1325674bd3c98d84f"
  },
  {
    "url": "leetcode/p6.html",
    "revision": "1c43dcdcd7d28aba29a43b8ae1aa34d5"
  },
  {
    "url": "leetcode/p60.html",
    "revision": "a051de0b93495f3804e682b308360791"
  },
  {
    "url": "leetcode/p61.html",
    "revision": "fc76f4b0929f25ed98f03dc48e9fb041"
  },
  {
    "url": "leetcode/p62.html",
    "revision": "f64c08ce525f0cbfbddb4ad429c16da0"
  },
  {
    "url": "leetcode/p63.html",
    "revision": "551f3f9401056a4cebfd20b36c29a3d6"
  },
  {
    "url": "leetcode/p64.html",
    "revision": "31a23c6db2483de0ea2495efb6dda75b"
  },
  {
    "url": "leetcode/p65.html",
    "revision": "00062dd97ebbf2b5cd6b1f63b69e9c60"
  },
  {
    "url": "leetcode/p66.html",
    "revision": "dac5fcaefcd9796da44bff2a44b122f2"
  },
  {
    "url": "leetcode/p67.html",
    "revision": "1ce0172782c8abbd15e56da41df52c41"
  },
  {
    "url": "leetcode/p68.html",
    "revision": "cc90551f4bb7b902a0a90bb28fa87823"
  },
  {
    "url": "leetcode/p69.html",
    "revision": "c48473734ec5b8d80b700ecc5b9e3387"
  },
  {
    "url": "leetcode/p7.html",
    "revision": "932b9e27a2e16b2464737fb85331b097"
  },
  {
    "url": "leetcode/p70.html",
    "revision": "3f45281e772bd439e7aece7b43c3029e"
  },
  {
    "url": "leetcode/p71.html",
    "revision": "af8332a9292f4160b3aeeae1d448bb2c"
  },
  {
    "url": "leetcode/p72.html",
    "revision": "66271153b151f53ffc0a15a73caf8e87"
  },
  {
    "url": "leetcode/p73.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p74.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p75.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p76.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p77.html",
    "revision": "7e6c79c7cca7fc1ecab85717c22492ab"
  },
  {
    "url": "leetcode/p78.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p79.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p8.html",
    "revision": "d7ff7dad05d8f63ca0c2ec7650dda657"
  },
  {
    "url": "leetcode/p80.html",
    "revision": "bfb9673e2b013a8bbbb8ce051280ac99"
  },
  {
    "url": "leetcode/p81.html",
    "revision": "caa9640404d28d2b10d48bd353eb830a"
  },
  {
    "url": "leetcode/p82.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/p9.html",
    "revision": "0a842c247735252776156b6d3b06bc83"
  },
  {
    "url": "leetcode/sort.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/stack-queue.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/string.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "leetcode/tree.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "linux/common-command.html",
    "revision": "85cf2ee69e021e3007067d09744cc911"
  },
  {
    "url": "linux/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "linux/Linux.html",
    "revision": "fda9aa1d87f1e38f2a04c8632d60df94"
  },
  {
    "url": "linux/process.html",
    "revision": "63b48418c64c149401d39d0f320b12d5"
  },
  {
    "url": "network/application.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "network/conclude.html",
    "revision": "6bc50167e51b677666383a809f45a63a"
  },
  {
    "url": "network/HTTP.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "network/index.html",
    "revision": "caa9640404d28d2b10d48bd353eb830a"
  },
  {
    "url": "network/link.html",
    "revision": "3de8a62d0d20c6c43da82039e1419ed7"
  },
  {
    "url": "network/network.html",
    "revision": "a90c43f502250b95730af5b2fa68d75a"
  },
  {
    "url": "network/physical.html",
    "revision": "a60d437ce42d9b00c73ff43836eff06e"
  },
  {
    "url": "network/Socket.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "network/summary.html",
    "revision": "e843855ad93aebd9ffa8a6372437e90a"
  },
  {
    "url": "network/transport.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "Osystem/concept.html",
    "revision": "33f2c61d1dedde14e36352662e7e306b"
  },
  {
    "url": "Osystem/conclude.html",
    "revision": "ee8807b0701587a74af07ed108737591"
  },
  {
    "url": "Osystem/deadlock.html",
    "revision": "7ce5118e767542fb5c9b775c673ebee9"
  },
  {
    "url": "Osystem/device-mgmt.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "Osystem/index.html",
    "revision": "caa9640404d28d2b10d48bd353eb830a"
  },
  {
    "url": "Osystem/memory-mgmt.html",
    "revision": "688d5dd685f25161a9d99711356ea35a"
  },
  {
    "url": "Osystem/process-mgmt.html",
    "revision": "2fab42fc9bdfec8f971cfd47827decba"
  },
  {
    "url": "tag/index.html",
    "revision": "6c3422f3c58825ab928df9c9472f9c75"
  },
  {
    "url": "timeline/index.html",
    "revision": "a9493f7861d43d8da90bbda8515d3c0d"
  },
  {
    "url": "tools/build-tools.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/code-readability.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/code-style.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/Docker.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/Git.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/index.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/protocols.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "tools/regular-expr.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "web/attack-tech.html",
    "revision": "26c7c6b764d85dc0508945fad76bd4d3"
  },
  {
    "url": "web/browser.html",
    "revision": "c715293c60a2b76be954a5ccaa469cf6"
  },
  {
    "url": "web/guide.html",
    "revision": "53746829e9124ac9f493e01e348edb64"
  },
  {
    "url": "web/index.html",
    "revision": "a3a1d6ff4d0c55602151341b21d8b6a4"
  },
  {
    "url": "web/resource.html",
    "revision": "587bf787f1438f72ca9092498c83537f"
  },
  {
    "url": "web/web.html",
    "revision": "2f21188ff6a05ea5dec17979a8252e15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
