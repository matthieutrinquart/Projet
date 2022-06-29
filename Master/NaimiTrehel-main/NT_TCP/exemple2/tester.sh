gnome-terminal -e "./exemple2/racine 127.0.0.1 12345 12345"  --window-with-profile=test
gnome-terminal -e "./exemple2/noeud 127.0.0.1 12345 12344"  --window-with-profile=test

sleep 1
gnome-terminal -e "./exemple2/noeud 127.0.0.1 12345 12343"  --window-with-profile=test
sleep 1
gnome-terminal -e "./exemple2/noeud 127.0.0.1 12345 12342"  --window-with-profile=test
