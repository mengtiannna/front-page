import { Action, AppState } from "../type.ts";
const goodsImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYwAAAE8CAYAAADT84Y/AAAAAXNSR0IArs4c6QAAIABJREFUeF7t3XmUnFWZx/Gn9056DSSAQiJLIAioKMsgqyAhrLIIRJYE2dwGlRn1jOLAoOA26qjD4IJAZIsRwo7siKzmiIDDJmswEDaDpDvppPfuOb9iCpum3vve2jpPdb73HA5/5FbVrc/zdv3e5b73rdr7F28MGw0BBBBAAIEUgSoCg20EAQQQQCBGgMCIUaIPAggggIARGGwECCCAAAJRAgRGFBOdEEAAAQQIDLYBBBBAAIEoAQIjiolOCCCAAAIEBtsAAggggECUAIERxUQnBBBAAAECg20AAQQQQCBKgMCIYqITAggggACBwTaAAAIIIBAlQGBEMdEJAQQQQIDAYBtAAAEEEIgSIDCimOiEAAIIIEBgsA0ggAACCEQJEBhRTHRCAAEEECAw2AYQQAABBKIECIwoJjohgAACCBAYbAMIIIAAAlECBEYUE50QQAABBAgMtgEEEEAAgSgBAiOKiU4IIIAAAgQG2wACCCCAQJQAgRHFRCcEEEAAAQKDbQABBBBAIEqAwIhiohMCCCCAAIHBNoAAAgggECVAYEQx0QkBBBBAgMBgG0AAAQQQiBIgMKKY6IQAAgggQGCwDSCAAAIIRAkQGFFMdEIAAQQQIDDYBhBAAAEEogQIjCgmOiGAAAIIEBhsAwgggAACUQIERhQTnRBAAAEECAy2AQQQQACBKAECI4qJTggggAACBAbbAAIIIIBAlACBEcVEJwQQQAABAoNtAAEEEEAgSoDAiGKiEwIIIIAAgcE2gAACCCAQJUBgRDHRCQEEEECAwGAbQAABBBCIEiAwopjohAACCCBAYLANIIAAAghECRAYUUx0QgABBBAgMNgGEEAAAQSiBAiMKCY6IYAAAggQGGwDCCCAAAJRAgRGFBOdEEAAAQQIDLYBBBBAAIEoAQIjiolOCCCAAAIEBtsAAggggECUAIERxUQnBBBAAAECg20AAQQQQCBKgMCIYqITAggggACBwTaAAAIIIBAlQGBEMdEJAQQQQIDAYBtAAAEEEIgSIDCimOiEAAIIIEBgsA0ggAACCEQJEBhRTHRCAAEEECAw2AYQQAABBKIECIwoJjohgAACCBAYbAMIIIAAAlECBEYUE50QQAABBAgMtgEEEEAAgSgBAiOKiU4IIIAAAgQG2wACCCCAQJQAgRHFRCcEEEAAAQKDbQABBBBAIEqAwIhiohMCCCCAAIHBNoAAAgggECVAYEQx0QkBBBBAgMBgG0AAAQQQiBIgMKKY6IQAAgggQGCwDSCAAAIIRAkQGFFMdEIAAQQQIDDYBhBAAAEEogQIjCgmOiGAAAIIEBhsAwgggAACUQIERhQTnRBAAAEECAy2AQQQQACBKAECI4qJTggggAACBAbbAAIIIIBAlACBEcVEJwQQQAABAoNtAAEEEEAgSoDAiGKiEwIIIIAAgcE2gAACCCAQJUBgRDHRCQEEEECAwGAbQAABBBCIEiAwopjohAACCCBAYLANIIAAAghECRAYUUx0QgABBBAgMNgGEEAAAQSiBAiMKCY6IYAAAggQGGwDCCCAAAJRAgRGFBOdEEAAAQQIDLYBBBBAAIEoAQIjiolOCCCAAAIEBtsAAggggECUAIERxUQnBBBAAAECg20AAQQQQCBKgMCIYqITAggggACBwTaAAAIIIBAlQGBEMdEJAQQQQIDAYBtAAAEEEIgSIDCimOiEAAIIIEBgsA0ggAACCEQJEBhRTHRCAAEEECAw2AYQQAABBKIECIwoJjohgAACCBAYbAMIIIAAAlECBEYUE50QQAABBAgMtgEEEEAAgSgBAiOKiU4IIIAAAgQG2wACCCCAQJQAgRHFRCcEEEAAAQKDbQABBBBAIEqAwIhiohMCCCCAAIHBNoAAAgggECVAYEQx0QkBBBBAgMBgG0AAAQQQiBIgMKKY6IQAAgggQGCwDSCAAAIIRAkQGFFMdEIAAQQQIDDYBhBAAAEEogQIjCgmOiGAAAIIEBhsAxUtUFdjtsWUWqs2s6dfH7TegeGK/j4MPn+B9ZqrbVp7jb28YtBeXjGU/xvwimgBAiOayk/H6ZNrbK/p9bZha01wUGfe1mXDJf793HFane2zRb1NX7fWmuqrrLHOrLrKrKffrKtv2Dp7hmzRkn679vFeW9VX4g83swPe22CzZtTb+s3V1tpYbbVKihFtYMhsZe+Q/a1ryO59vt8W/LnHT+FKNJIJdVW22yZ1tv3UOmuoqUp81z8s6bebn+ot6FPlevrezQW9NvSiqx/rsT+/PFDw+06aUG2n7DLBNlmnxtadWG0T6qtspIC2uJ7+YVvePWwvdAzaz+5fTYgUrP3OFxIYJcQsx1tVVZl94F21tsdm9bbtu2ttg5aad/xIJn3ufucvN/2AFts0hrnbTbDZH2g07dHHNu3tnX17lz3z+mDsSxL7bbNBrZ22V5NNaR6VECnvvKJn2L5/16pMiFVq04/kntPrbKdp9aadhZaG5JAY+R0fXNpvX72xq6Cv3VBbZTec0F7Qa0MvUpAfM78z7/dVgJ2yy0Tbf8sG0/YY2xQg9yzusx/ctdq6+0u/AxM7jvHSj8BwWsmJ9VX2y8NbbUpTdV5/ICO/TikCY3JTtf38463W1pjHX+ko0zue7bPv/m5VQdL6cfjBgS32/nfVFvT67Iuef2PQPn/Nyoo6ZXX8DhPs0G0aTEcUhTSPgbGsa8iOzjMwdt2kzr66Z5MpxApt2nH66f2r7fonCjviKvRzx9vrCAynFdVe5eVz2ooaXbGB8Z5JNfbTw1qsPnDaI3aAOg3xlRtWxnZ/q9839mm2nTeuy/t1uV7w+KsDdup1+Y+hJB9ewJv8+OAW23r9woNyPATGu1qrbd6RbVaT34FlTm0dX3z2yhX23N+LP+ItoJzj4iUEhtMyrunA0HWJK+a0W2sRRxajaXU+/Yd3rY4W17WSr3ykKbp/TMf/uW915vpKJbS1PTB0dLngmDZbZ2IJ0uL/C65TlEdc0mFDnJ0q6E+AwCiIrfwvWtOBcfreTbb7pvUl/6KfXrjCFr+RvoenU3JXzW0vyZ7lyC+hSQBzFnTaaytLcHGn5Dpvf8O1PTC0s6CdhlK3+/7ab2feWti1nVKPpdLej8BwWrE1GRj6sb7muPaoayc6N5w5XTBsUf2ffX3QPnvVilT1/bZssH/dfWJqP+0oDg2Z9Q8NZ2YMxVwQveGJXvvJvfFHOqmDKFOHtT0wrpwbd4TbNzhsddVVpv/HXOcYHDLb9/zlZara+H5bAsNpfddkYPzzzhPtkG0agjI9A8P2petX2tPL/nG0MHvbRjtxxwlvm+aY600+E3Ee+Vv7NduOU8PXLu7/a799645VmR8KNYXFF3aZaAds1RAcw1PLBuyUq/1fy/AcGPrRLaS92DFoJy9M32HQhf7rjg/P0lrdP2xn377KHnjxHzPgNp9cY2fv25x6GmvOrzvt1Qo4yizEuJyvITDKqVvEeycFhs7B6gfvsVcHTLNoQq3Qi96/OTZ83lhhoamRGsvopgvUulAdarc/02ffuzM8aypt7zJ0PeTw9zfap3dKtlnZO2yHXdRRRHXG5qW5AkNHdLpB7cGlA7brxnXBacbluuit6akfm1dev7QjTDnMvrQj5zao629XH9duOlJOajrC1JEmLT8BAiM/rzHrrZlJC+e2Wd+g2ZN/G8jchHbX4r635pLrQqB+2EsdGNpLv+XkScE99Esf6rGL/tSd+NGXHNVmG7QkX6h8Y/WQzb40PBf/1k8lj0FHFAde2BG8KTEUeoq5fc7zf0pCoXfINo2mvfKHXuq3O57pe9s9LT85uMW2CsyiquTA+NpeTZmbU5PaZQ/12K8C2+Ce0+sz9+0ktd8922ffKXCq95j9CDj8IALDYVFihlSuwND9Dj88qCVxCDoVceCF4RsC953RYF/aI3z94dCLOqyrN3mqym2fmpQ4Bt1T8amU0xrf3q/Zdgic0jr217kvfH9+14m212bhC60KrLkLVgTv6Th46wb75PbhI0B9we/cucr++EJhNxWO58A4c59m2yUwnTpt8oR2uH57YvIpLe2E6b4cWn4CBEZ+Xm56lyswDtyqwb64a/KPfczRgW42nH9M+OhH02tDy1bcfNKkxBlSSzsH7fjfhM+D//veTbZHYJbX/hcst/4ck7XSTmdlN4DfP9eXuX6Sq+mu5GuPb0+9fyV0WiVmQxvPgaFtUNtiUvv4xblPR43sH9rp+NPSfvtagXfBx9RmvPYhMCq0suUKjDnbNWaWAUlqMXv3em3oj1X/ft0TvXZOYKaSzkE3JyyB8fqqITvqsvAprZ8d1ppZRiNX0w+1ru8ktXMOabEt1wvfMKdjo2Pnd2bWrBrdNLtL5+DTmgJHwVNoG8+BcdBWDfaFwI7LN27rypymTWobtdXYvNmtif9+9WO9mTu/afkJEBj5ebnpXa7A0CmZjwX27B5/bcBOvTb9UP5WXQcJrOSQduf3BUe2ZlYgTWq6Y1t3budqun5y8VFtiddhOrrfvHkrqeli6RVz2lKPEP7ytwH7wqjTGpqsoOsnadN7F73Qb6ffXNy9AGs6MLRcjFaKXbepOrPgn2YdKUBLcVPcFlNq7NxDk3/wdS+PTksltbRTkt///Sq79enCw9rND8EYD4TAGGPwUn1cuQJDC7zp/HtSizkdpFkqunAeaq91DWX20JOaVqU9dbfkU2Oa6aQfjGWr3r6Hr6MSrX2l1WyT2sJHeuwXi5Iv2ut1WpX3W/umr9Y6Ori+f2BLZpHIUNOqvkdc3FH0wpBrKjD03XQ6L2khytV9w6YwvfLR3rdNec1327/quPbgQotJky9iZlgdcMHykgRbvt+p0vsTGBVawXIFRtqpgJgpqVqD6vwjkvcORR4zNfPaT4anRuqu7Tuf67NHXx0wXYx/73o1NnOLhuBqvjod9bF5ua9fjN4U0mbqqP/I4NMpMJ0KCzWdytJRiS66FtvWZGDEjl1HHdqbf+SV/L+vFl783M7hyROvrBgyzXha0jFoG7ZW226b1tum64SXVK6UGzdjjceyH4Exltol/KxyBYbO3escflLTD97Rl3WariMkNd2894ltG4PfVnuouvAcalql9IyZzak3AubDOu+Bbpv/cNwzMnRaSaeXdJop1LKnN3TOXOfOQ+2ax3rt3BKdO6+EwMhapE3FTjK78MhWmxo4NZlP7dVXpyM1Q44HbeUr92Z/AqMwtzX+qnIFhk4z3Hhi+HTSPc/32TdvS77xTjOEJqYsyR27PMNHNqu30z7aVHRo6Gjkkoe67ZIH48IiW2AdLWmZ+dA1Cd1x/KO7V9vXPxpeKDHtNFy+G1UlBYa+m44Gv50wsyzpu2vG2XmHlyY0dKPp3AWdZXmwV761q9T+BEaFVq5cgSGOm06aFDytox9fPc1PS3OMbrELxuVz85yOer7ykYnBi+ChMurO+DNuWWWaElxIO/qDjal31ae9bzkWPay0wJDReYu67YpH8gttXRP7zIcnmk6Xjn7CYpq7/l3b2l3P9dmP7lltur5CK1yAwCjcbo2+spyBoedwpJ2GyQTLk71245N9tvjvg7b91FrTD+uMKfHPb5gZebd19gdD57QLaU+8NpD5sfhrxCq5Se+vC+mbrZvH4wZHvZGmcGoqZylbJQaGfq5PvmKFLVmevmLxSCvtNOia0rtb81/qXKc/5z/cbZc93FPyRxaXsp6V8F4ERiVUKccYyxkYx36o0Y6LuEu5WLqYwNCNdMfv0Jg6xTVmLMXMvdfsq8uPbc/rEbXZMZXrruI1HRg6rVjIg41yTUdOqp+m7Wqp/bT7YmLqr6OLk65458y6mNfS500BAqNCt4RyBoZI0mYolYItLTBO2nGCaQXcUjY9PEkPUSqk6SL8f8xMn2o78r21jMgRl3SW5VTIWAaGpgLf+3yfPfzSQOaJdS90DGb21nWKaPrk2swyHgr32FNGxy3oND3zPdR0n4fWJSv0EbW53lsLZ554+YqcN1wWsk2sba8hMCq04uUOjP23bLB/iXgeRaF8+rHZ55fJs6Ri74PQ5+tHQO8X+8NSzOmhM2Y22W6bxD/U5/RbumzRksLWikqzLWdg6Idfy7vo+SU6lZN0k+TIMWr9Jq0hFlo0MNv/ykd77Od/CN8Lc/En2kyPaE1rOtLpHhi2xtqqqMDSGmZay4yWvwCBkb+Zi1eUOzD0JRcc22brlvDxmCPh0pbnuPSoNls/sOKtzoXf+Jc3jxb0XpnD5Sqz47abkLmWkjar6eACl+fO59G1dy/us7NuDy/jXszGVM7AKGZcaXdZ6721Au8JlyffqR2zw6Apsgrkkfe0aAquPj+0WrI+X2Gl0KLlJ0Bg5OflpvdYBIYufOsGvEKe660f9MDKIJmjgoMuzL2Xt/1Gdfad/ZNP/aTd/Ka90nlHtgXPrxdzlLH35vX2b3umP2s8aYHDUm1EXgNDRyd6HnzSWmD6/mn34aQtkZ92XSjtSFCn2A79FUcZ+W6LBEa+Yk76j0Vg6KvqNM83ZzWnLncxkkV/jHpeQeghRp09w3b4xbn/YNOW19DsrP+6O3wdQtc+dA0kqaXt4Sa9TkcYC+eGl6zIvjbtfpViNyWvgaHvlTa9OjStukmPCP5k8tLkOqLUWmCh5fEzD1HSSgGB+4G+eO1K0ww6WrwAgRFv5arnWAVG9ktrSumc7SaYnpfRkmMVWV1DeGnFYOYhPzrnrbWgQsukP/P6oH0u4dneob1L/dDM+uXyqOmReh6Czqvnapoxc3ABe5hpz2kY/Vn/cWvu+1VKsTF5DoyYozDVMddChdttVGffDRxhahv7bsoTG+WrVZe1+nJSK+YosxT1q8T3IDAqsWpmmWcWl+OJe7Ec2ZVK9URAreeTfa529vVamlo3WiW13/6l1358T+6jhOtPaM9cwMzV8rlgedEn2hLn7adddM/12brYrVMd+TS5HHlJee4u9hwYH9qwzr53QHhG2SG/6sh517WWldHyMkntnPtW23WPp9/TokUgdbSa1EKP+c2nxmtTXwKjQqu9pgMjjS3tgrkej6lF43K10ONZY56FkX3P0DMx1EdHGLF3/uo6zoJj1p77MNLqm/bvMffyJB1hpJ3OOvPWLrsvxyoDo8eka1maaZXU0pbYT/uOa+O/ExgVWnXPgbHTe+rsrFnhvUtdv9B1jJyBEXiWhvbYD7gg7mKlLry2T0i+9J60h5trTGvbnd7F/lnolJJOLSW10Cy5tAdQxS5kmHZa7H9fHrAv35D+bJdiLcbT6wmMCq2m58BIm+GS9pjX0LUHlUvTMXXROtQyDzKak/wQpXxOSR31wUY7YYf053OHxlNpa0kV82ex+eQaO/ew1uAsudCkh7RrD2kzpLJj106Ldl6SWszkiWIcxuNrCYwKrepYBEZDbVXey0DHPMMg7aYtzULSNZKkpmsmWnU01H56WKvphyupLesasqMDD3DKvi5mtVpNEda8/tADn/R+lbJa7dYb1NqOU+sy9ylohdd8miYZ6GmFemphqIVOB+07oyFzA2Coff3mLvvjC8k3RKY9sU/vXc4JCfmYVVJfAsNptfRHs/E6yXe5arpg2nOjtXbSkHZtE9pVj/YmLpGgG99uOnGSdfYMZWY9pV1kVP8zZzbbzhsn79FlhxE6HaU+/3lAi31ww/Aihlop96zbu97x1DqN48t7NNk+W4Tvxv7Dkn4745bwI1L1XguOactMMAg1TfHV3mroInv29bHPw9AR0uxtw4st6o7q0CKRCsW7n09+DOmLHUOmyQejW/a57tpylnYM2vVP9Gb+y94gmctC01h1ofrQbRqj1tsK/VjretGVc5On1erzdWry6zd1mYJndNO6U7rgnrbEfrnvk3H601LUsAiMovjK9+KYH59iP13Lfp9yde5zuLr5SsucZ5v2om9/ps8eXNpvj74ykLn+oB+JrdevzZyr3m/L+tQfVr1XzMJzaY9nzY5JF6xvfLLXHtMT94bN3rdBrc2a0RA8Osm+NmamzVf3bLKPbh4OnpFHO5p6rGsdoZZ202H2tZq+/MODkmf4FFv77OtzremUDYyRn6H9jhW9w5kdCAXRKyuHTDOWN2ipsSnNVZn/x64jpYcXHZhw02b2M9Mez5rt99BL/ZmlV55/Y9CmTaqxHabW2T9Nq0t9fko+s+1KZT0e3ofAcFrFsQiMxW8MZp6LnauNDozRffQDElp+I9d76jWzL+205d3hRef0EKfrjg8/k6OYsmkcuvEr6aK73ls/PFpiIq199qoVmfWWsu2sfZttp2nho6yYZ3qPVWCcvHDFO5Z9zxUYaQ75/Pt/37s6c8QSap/58AT7+PtKu/DkyM+7a3GfnV3GZVvy8aikvgSG02p5D4xC2H7z5x47/4/hBeey71uOlWqz7/2LRd22MPAQH93drvPwuoYTag+82G+n3fT201o6d6/TKWl729or1jpISW28BkbsHfby006Ddh5K3WICu9SfOV7ej8BwWsnxFhj5TmHU0Yvm0KctIpdv+UJ3mGffK+2GOPXT+Xxdi1mV4wluMfcg6D20MKEWKMzVxmNg6IjumPnxz9PW43nTHnubb/11SvBUlgTJl+2t/gRGwXTlfeF4CoxCb5DS3rpCIzRjKp8qdPcPZ2ZGhdYgipnlpc+c/3CPzXsg+WgpbaaX3kML8B15ae41kcZbYLy2csg+f83K1NORo+tZisfjjnxPHVnqCJNWmACBUZhb2V81HgJD1wr0wKJz7y/sgUVC1pGGTk/pfHYhT3fTe2iv8panek3nzvUjndR0NKOASrs2s7J32A5LeZ5C2oq72THo+oeug4xu4yUwssvQJy0DE/OHtOk6NXb6zCbbqK3w81NaIUCrCzzyCosNxpgn9SEwitEr42vPO7zVNlmn8D+QmKGFLnrrR1NLm09tq0n9AR39WfqR0AN3vnnbqrz3KJPGraWyT9urKXMxOp+m1Uh16kc/GGktdmHB2IcinXNIS9SjRXPNVJo+uca0tEm5W66L3rKetUVD5qa36evWBJcpTxqfTtnpwvLP7l8dnFyQz/fbc3q9nbrrxNR7PEa+p6bfnreoO7PjQitegMAo3nBcv4Omzu6+ab3NmlFv09rf/PFoqKl6a29fRxH6o+wZMFuyfNBue7rP7ni2N7gnXwyYLkTPmFJjM6bU2maTa2yjtmprn1BtHd2a5lllSzsHTUH49LLBzBTe2LWiihnTeH+tTg3uvkm9bT6lJvNArfbGqswzUrQMeW31mzd36lqOpt0qoO98ti9Tg3I1rRH13vVqMzdmaqdKU3pX9g5ZW2O1vbpyKLMdPvP6gD217B+Pki3XWNa29yUw1raKl+j7Zk/bBO4LLNEn8TYIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+stLXNAAAB2UlEQVSVYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBAgML5VgHAgggIBzAQLDeYEYHgIIIOBFgMDwUgnGgQACCDgXIDCcF4jhIYAAAl4ECAwvlWAcCCCAgHMBAsN5gRgeAggg4EWAwPBSCcaBAAIIOBcgMJwXiOEhgAACXgQIDC+VYBwIIICAcwECw3mBGB4CCCDgRYDA8FIJxoEAAgg4FyAwnBeI4SGAAAJeBP4P3BspWDuiIlIAAAAASUVORK5CYII='
const brandUrl = 'data:image/png;base64,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'
export const main: AppState = {
  loading: false,
  name: "",
  brandModal: false,
  showMoreBrand: false,
  goodsModal: false,
  showMoreGoods: false,
  inquiryModal: false,
  formData: {
    goodsName: '',
    price: '',
    num: '',
    useName: '',
    phone: '',
    email: ''
  },
  productList: [
    {
      name: "内蒙古自治区内蒙古自治区内蒙古自治区Product A",
      id: 1001,
    },
    {
      name: "Product B",
      id: 1002,
    },
    {
      name: "Product C",
      id: 1003,
    },
    {
      name: "Product D",
      id: 1004,
    },
    {
      name: "Product E",
      id: 1005,
    },
    {
      name: "Product F",
      id: 1006,
    },
    {
      name: "Product G",
      id: 1007,
    },
    {
      name: "Product H",
      id: 1008,
    },
    {
      name: "Product I",
      id: 1009,
    },
    {
      name: "Product J",
      id: 1010,
    },
    {
      name: "内蒙古自治区内蒙古自治区内蒙古自治区Product A",
      id: 1001111,
    },
    {
      name: "Product B",
      id: 1001002,
    },
    {
      name: "Product C",
      id: 1001003,
    },
    {
      name: "Product D",
      id: 1001004,
    },
    {
      name: "Product E",
      id: 1001005,
    },
    {
      name: "Product F",
      id: 1001006,
    },
    {
      name: "Product G",
      id: 1001007,
    },
    {
      name: "Product H",
      id: 1001008,
    },
    {
      name: "Product I",
      id: 1001009,
    },
    {
      name: "Product J",
      id: 1011110,
    },
  ],
  brandList: [
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1001,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1002,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1003,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1004,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1005,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1006,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1007,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1008,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1009,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1010,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1011,
    },
    {
      url: brandUrl,
      name: "上海贝岭",
      id: 1012,
    },
  ],
  productIds: [],
  brandIds: [],
  goodsList: [
    {
      goodsId: "0",
      goodsImg: goodsImg,
      goodsName: "电解电容电解电容电解电容电解电容电解电容",
      goodsNo: "100417718283100417718283100417718283100417718283",
    },
    {
      goodsId: "1",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "2",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "3",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "4",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "5",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "6",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "7",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "8",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "9",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "10",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "11",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "12",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "13",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "14",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "15",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "16",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "17",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "18",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "19",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "20",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "21",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "22",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "23",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "24",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "25",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "26",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "27",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
    {
      goodsId: "28",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718283",
    },
    {
      goodsId: "29",
      goodsImg: goodsImg,
      goodsName: "电解电容",
      goodsNo: "100417718282",
    },
  ],
};

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    case "clean":
      return { ...main, ...action.payload };
    default:
      return state;
  }
};
