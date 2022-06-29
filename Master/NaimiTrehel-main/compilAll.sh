echo "Compilation de TCP"
cd NT_TCP
./makefile
echo "Ok ! "
cd ..

echo "Compilation de UDP + Stack"
cd NT_UDP_STACK
./makefile
echo "Ok !"
cd ..

echo "Compilation de UDP"
cd NT_UDP
./makefile
echo "Ok ! "
cd ..
