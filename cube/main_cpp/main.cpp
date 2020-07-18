#include <iostream>
using namespace std;

struct Cube
{
    string g[3][3] = {{"00", "01", "02"}, {"10", "green", "12"}, {"20", "21", "22"}};
    string o[3][3] = {{"00", "01", "02"}, {"10", "orange", "12"}, {"20", "21", "22"}};
    string b[3][3] = {{"00", "01", "02"}, {"10", "blue", "12"}, {"20", "21", "22"}};
    string r[3][3] = {{"00", "01", "02"}, {"10", "red", "12"}, {"20", "21", "22"}};
    string w[3][3] = {{"00", "01", "02"}, {"10", "white", "12"}, {"20", "21", "22"}};
    string y[3][3] = {{"00", "01", "02"}, {"10", "yellow", "12"}, {"20", "21", "22"}};
};

int main ()
{
    Cube myCube1, myCube2;
    myCube1.g[1][1] = "yellow";
    cout << myCube1.g[1][1] << endl;
    cout << myCube2.g[1][1] << endl;
    return 0;
};
