searchNodes=[{"doc":"Stores the session in a cookie. This cookie store is based on Plug.Crypto.MessageVerifier and Plug.Crypto.Message.Encryptor which encrypts and signs each cookie to ensure they can't be read nor tampered with. Since this store uses crypto features, it requires you to set the :secret_key_base field in your connection. This can be easily achieved with a plug: plug :put_secret_key_base def put_secret_key_base ( conn , _ ) do put_in conn . secret_key_base , &quot;-- LONG STRING WITH AT LEAST 64 BYTES --&quot; end Options :encrypt - specify whether to encrypt cookies, defaults to true. When this option is false, the cookie is still signed, meaning it can't be tempered with but its contents can be read; :encryption_salt - a salt used with conn.secret_key_base to generate a key for encrypting/decrypting a cookie; :signing_salt - a salt used with conn.secret_key_base to generate a key for signing/verifying a cookie; :key_iterations - option passed to Plug.Crypto.KeyGenerator when generating the encryption and signing keys. Defaults to 1000; :key_length - option passed to Plug.Crypto.KeyGenerator when generating the encryption and signing keys. Defaults to 32; :key_digest - option passed to Plug.Crypto.KeyGenerator when generating the encryption and signing keys. Defaults to :sha256 ; :serializer - cookie serializer module that defines encode/1 and decode/1 returning an {:ok, value} tuple. Defaults to :external_term_format . Examples # Use the session plug with the table name plug Plug.Session , store : PlugRailsCookieSessionStore , key : &quot;_my_app_session&quot; , encryption_salt : &quot;cookie store encryption salt&quot; , signing_salt : &quot;cookie store signing salt&quot; , key_length : 64 , serializer : Poison","ref":"PlugRailsCookieSessionStore.html","title":"PlugRailsCookieSessionStore","type":"module"},{"doc":"Callback implementation for Plug.Session.Store.delete/3 .","ref":"PlugRailsCookieSessionStore.html#delete/3","title":"PlugRailsCookieSessionStore.delete/3","type":"function"},{"doc":"Callback implementation for Plug.Session.Store.get/3 .","ref":"PlugRailsCookieSessionStore.html#get/3","title":"PlugRailsCookieSessionStore.get/3","type":"function"},{"doc":"Callback implementation for Plug.Session.Store.init/1 .","ref":"PlugRailsCookieSessionStore.html#init/1","title":"PlugRailsCookieSessionStore.init/1","type":"function"},{"doc":"Callback implementation for Plug.Session.Store.put/4 .","ref":"PlugRailsCookieSessionStore.html#put/4","title":"PlugRailsCookieSessionStore.put/4","type":"function"},{"doc":"MessageEncryptor is a simple way to encrypt values which get stored somewhere you don't trust. The cipher text and initialization vector are base64 encoded and returned to you. This can be used in situations similar to the MessageVerifier , but where you don't want users to be able to determine the value of the payload. Example secret_key_base = &quot;072d1e0157c008193fe48a670cce031faa4e...&quot; encrypted_cookie_salt = &quot;encrypted cookie&quot; encrypted_signed_cookie_salt = &quot;signed encrypted cookie&quot; secret = KeyGenerator . generate ( secret_key_base , encrypted_cookie_salt ) sign_secret = KeyGenerator . generate ( secret_key_base , encrypted_signed_cookie_salt ) encryptor = MessageEncryptor . new ( secret , sign_secret ) data = %{ current_user : %{ name : &quot;José&quot; } } encrypted = MessageEncryptor . encrypt_and_sign ( encryptor , data ) decrypted = MessageEncryptor . verify_and_decrypt ( encryptor , encrypted ) decrypted . current_user . name # =&gt; &quot;José&quot;","ref":"PlugRailsCookieSessionStore.MessageEncryptor.html","title":"PlugRailsCookieSessionStore.MessageEncryptor","type":"module"},{"doc":"Encrypts and signs a message.","ref":"PlugRailsCookieSessionStore.MessageEncryptor.html#encrypt_and_sign/4","title":"PlugRailsCookieSessionStore.MessageEncryptor.encrypt_and_sign/4","type":"function"},{"doc":"Decrypts and verifies a message. We need to verify the message in order to avoid padding attacks. Reference: http://www.limited-entropy.com/padding-oracle-attacks","ref":"PlugRailsCookieSessionStore.MessageEncryptor.html#verify_and_decrypt/4","title":"PlugRailsCookieSessionStore.MessageEncryptor.verify_and_decrypt/4","type":"function"},{"doc":"MessageVerifier makes it easy to generate and verify messages which are signed to prevent tampering. For example, the cookie store uses this verifier to send data to the client. Although the data can be read by the client, he cannot tamper it.","ref":"PlugRailsCookieSessionStore.MessageVerifier.html","title":"PlugRailsCookieSessionStore.MessageVerifier","type":"module"},{"doc":"Signs a binary according to the given secret.","ref":"PlugRailsCookieSessionStore.MessageVerifier.html#sign/2","title":"PlugRailsCookieSessionStore.MessageVerifier.sign/2","type":"function"},{"doc":"Decodes and verifies the encoded binary was not tampared with.","ref":"PlugRailsCookieSessionStore.MessageVerifier.html#verify/2","title":"PlugRailsCookieSessionStore.MessageVerifier.verify/2","type":"function"}]