@echo off
set path=%CD%

cd node_modules/protoc/protoc/bin
protoc -I=%path%/proto_files helloworld.proto OrderTest.proto --plugin=protoc-gen-grpc-web=%path%/node_modules/protoc-gen-grpc-web/bin/protoc-gen-grpc-web.exe --js_out=import_style=commonjs:%path%/out_files --grpc-web_out=import_style=commonjs,mode=grpcwebtext:%path%/out_files
exit