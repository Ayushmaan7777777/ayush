import java.util.ArrayList;
public class phoneno{
    public static void backtrack(ArrayList<String> result, String[] ma, String digits, String cC, int index) {
        if (index == digits.length()) {
            result.add(cC);
            return;
        }
        
        int digit = digits.charAt(index) - '0';
        String letters = ma[digit];
        
        for (int i = 0; i < letters.length(); i++) {
            backtrack(result, ma, digits, cC + letters.charAt(i), index + 1);
        }
    }
public static ArrayList<String> lC(String digits) {
    ArrayList<String> result = new ArrayList<>(); //result is given as an arraylist here
    if (digits == null || digits.length() == 0) {
        return result;
    }
    
    String[] ma = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    backtrack(result, ma, digits, "", 0); 
    return result;
}
public static void main(String[] args) {
    String digits ="23";
    ArrayList<String> arr = new ArrayList<>();
    arr = lC(digits);
    // Print the result
    System.out.println(arr);
}
}