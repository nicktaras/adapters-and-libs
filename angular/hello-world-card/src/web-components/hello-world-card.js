// Usage:
// <hello-world-card></hello-world-card>

(function () {
  const template = document.createElement('template');

  template.innerHTML = `
    <style></style>
    <div>
      <p>Hello World Card.</p>

      <div class="ts-wrapper">
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <ts:token xmlns:ethereum="urn:ethereum:constantinople"
                  xmlns:ts="http://tokenscript.org/2020/06/tokenscript"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  name="entrytoken"
                  xsi:schemaLocation="http://tokenscript.org/2020/06/tokenscript http://tokenscript.org/2020/06/tokenscript.xsd"
        >
          <ts:label>
            <ts:plurals xml:lang="en">
              <ts:string quantity="one">Ticket</ts:string>
              <ts:string quantity="other">Tickets</ts:string>
            </ts:plurals>
            <ts:plurals xml:lang="es">
              <ts:string quantity="one">Boleto de admisión</ts:string>
              <ts:string quantity="other">Boleto de admisiónes</ts:string>
            </ts:plurals>
            <ts:plurals xml:lang="zh">
              <ts:string quantity="one">入場券</ts:string>
              <ts:string quantity="other">入場券</ts:string>
            </ts:plurals>
          </ts:label>
          <ts:contract interface="erc875" name="EntryToken">
            <ts:address network="1">0x63cCEF733a093E5Bd773b41C96D3eCE361464942</ts:address>
            <ts:address network="3">0xFB82A5a2922A249f32222316b9D1F5cbD3838678</ts:address>
            <ts:address network="4">0x59a7a9fd49fabd07c0f8566ae4be96fcf20be5e1</ts:address>
            <ts:address network="42">0x2B58A9403396463404c2e397DBF37c5EcCAb43e5</ts:address>
          </ts:contract>
          <ts:origins>
            <!-- Define the contract which holds the token that the user will use -->
            <ts:ethereum contract="EntryToken"></ts:ethereum>
          </ts:origins>
            <ts:selection filter="expired=TRUE" name="expired">
              <ts:label>
                <ts:plurals xml:lang="en">
                  <ts:string quantity="one">Expired Ticket</ts:string>
                  <ts:string quantity="other">Expired Tickets</ts:string>
                </ts:plurals>
                <ts:string xml:lang="zh">已经过期的票</ts:string>
              </ts:label>
            </ts:selection>
          <ts:cards>
            <ts:card name="main" type="token">
              <ts:item-view xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
                <style type="text/css">.card { height: 100px; width: 200px; background: lightgrey; padding: 20px; margin: 20px; border-radius: 20px }</style>
                <body><div>
            <!-- Iconified view displayed on the first page when clicking on token card in AlphaWallet -->
            <p class="card">Hello World</p>
            </div>
            </body> 
            </ts:item-view>        
            </ts:card>
          </ts:cards>
            <ts:attribute name="tokenId" distinct="true">
              <ts:type>
                <ts:syntax>1.3.6.1.4.1.1466.115.121.1.40</ts:syntax>
              </ts:type>
              <ts:origins>
                <ethereum:call function="balanceOf" contract="EntryToken">
                    <ts:data>
                      <ts:uint256 ref="ownerAddress"></ts:uint256>
                    </ts:data>
                </ethereum:call>
              </ts:origins>
            </ts:attribute>
            <ts:attribute name="locality">
                <ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.15</ts:syntax></ts:type>
              <ts:origins>
                <ethereum:call as="utf8" contract="EntryToken" function="getLocality">
                    <ts:data>
                      <ts:uint256 ref="tokenId"></ts:uint256>
                    </ts:data>
                </ethereum:call>
              </ts:origins>
            </ts:attribute>
            <ts:attribute name="time">
                <ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.24</ts:syntax></ts:type>
              <ts:label>
                <ts:string xml:lang="en">Time</ts:string>
                <ts:string xml:lang="zh">时间</ts:string>
              </ts:label>
              <ts:origins>
                <ts:token-id as="utf8" bitmask="
                0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000
                474d542b33000000000000000000000001075b2282f05255534b534101050002
        "></ts:token-id>
              </ts:origins>
            </ts:attribute>
            <ts:attribute name="expired"> <!-- boolean -->
                <ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.7</ts:syntax></ts:type>
              <ts:origins>
                <ethereum:call as="bool" contract="EntryToken" function="isExpired">
                  <ts:data>
                    <ts:uint256 ref="tokenId"></ts:uint256>
                  </ts:data>
                </ethereum:call>
              </ts:origins>
            </ts:attribute>
            <ts:attribute name="street"> <!-- string -->
                <ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.15</ts:syntax></ts:type>
              <ts:origins>
                <ethereum:call as="utf8" contract="EntryToken" function="getStreet">
                  <ts:data>
                    <ts:uint256 ref="tokenId"></ts:uint256>
                  </ts:data>
                </ethereum:call>
              </ts:origins>
            </ts:attribute>
            <ts:attribute name="building"> <!-- string -->
                <ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.15</ts:syntax></ts:type>
              <ts:origins>
                <ethereum:call as="utf8" contract="EntryToken" function="getBuildingName">
                  <ts:data>
                    <ts:uint256 ref="tokenId"></ts:uint256>
                  </ts:data>
                </ethereum:call>
              </ts:origins>
            </ts:attribute>
            <ts:attribute name="state"> <!-- string -->
                <ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.15</ts:syntax></ts:type>
              <ts:origins>
                <ethereum:call as="utf8" contract="EntryToken" function="getState">
                  <ts:data>
                    <ts:uint256 ref="tokenId"></ts:uint256>
                  </ts:data>
                </ethereum:call>
              </ts:origins>
            </ts:attribute>
        </ts:token>
      </div>
    </div>
  `;

  class HelloWorldCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

  }

  window.customElements.define('hello-world-card', HelloWorldCard);
})();

